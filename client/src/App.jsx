import { useState, useEffect, useRef } from "react";
import Peer from "peerjs";
import { io } from "socket.io-client";

// Socket.io
const socket = io("http://192.168.0.133:3000");

function App() {
  const [peerId, setPeerId] = useState(localStorage.getItem("peerId") || null);
  const [connected, setConnected] = useState(false);
  const [peerList, setPeerList] = useState([]);
  const peerListRef = useRef([]);
  const [latestMessage, setLatestMessage] = useState("");
  const peerConnections = useRef(new Map());
  const peerInstance = useRef(null);

  useEffect(() => {
    // PeerJS Server
    const storedPeerId = localStorage.getItem("peerId");

    const initializePeer = (id = null) => {
      const peer = new Peer(id, {
        host: "192.168.0.133",
        port: 9000,
        path: "/peerjs",
        secure: false,
      });

      peer.on("open", (id) => {
        setPeerId(id);
        setConnected(true);
        localStorage.setItem("peerId", id);
      });

      peer.on("connection", (conn) => {
        conn.on("data", (data) => {
          if (data.type === "broadcast_msg") {
            setLatestMessage(data.message);
            if (data.ttl > 0) {
              peerListRef.current.forEach((peerId) => {
                if (
                  peerId !== peer.id &&
                  !peerConnections.current.has(peerId)
                ) {
                  const newConn = peer.connect(peerId);
                  peerConnections.current.set(peerId, newConn);
                  newConn.on("open", () => {
                    newConn.send({
                      type: "broadcast_msg",
                      message: data.message,
                      ttl: data.ttl - 1,
                    });
                  });
                  newConn.on("error", (err) => {
                    console.error("Connection Error:", err);
                  });
                }
              });
            }
          }
        });
      });

      peer.on("error", (err) => {
        console.error("PeerJS Error:", err);
      });

      return peer;
    };

    if (storedPeerId) {
      setPeerId(storedPeerId);
      setConnected(true);
      peerInstance.current = initializePeer(storedPeerId);
    } else {
      peerInstance.current = initializePeer();
    }

    socket.on("send_peers", (data) => {
      if (data?.peerList) {
        setPeerList(data.peerList);
        setLatestMessage(data.latestMessage);
      }
    });

    socket.on("new_message", (data) => {
      setLatestMessage(data.latestMessage);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("send_peers");
      socket.off("new_message");
      if (peerInstance.current) {
        peerInstance.current.destroy();
      }
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("peerId");
    setPeerId(null);
    setConnected(false);
    if (peerInstance.current) {
      peerInstance.current.destroy();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Simple P2P Web App</h3>
        <h4>Your Peer ID: {peerId}</h4>
        <h6 style={{ color: connected ? "green" : "red" }}>
          {connected ? "Connected" : "Not Connected"}
        </h6>

        <div>
          <h5>Latest Message:</h5>
          <p>{latestMessage || "No messages received."}</p>
        </div>
        <div>
          <h5>Peer List:</h5>
          {peerList?.length > 0 ? (
            <ul>
              {peerList.map((peer, index) => (
                <li key={index}>{peer}</li>
              ))}
            </ul>
          ) : (
            <p>No peers connected.</p>
          )}
        </div>
        <button
          onClick={logout}
          style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
        >
          Logout
        </button>
      </header>
    </div>
  );
}

export default App;
