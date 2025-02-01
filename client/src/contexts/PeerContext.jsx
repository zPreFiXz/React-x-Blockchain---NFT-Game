import { useState, useEffect, useRef, createContext, useContext } from "react";
import PropTypes from "prop-types";
import Peer from "peerjs";
import { io } from "socket.io-client";

const PeerContext = createContext();

// Socket.io
const socket = io("http://localhost:3000");

export const PeerProvider = ({ children }) => {
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
        host: "localhost",
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

  return (
    <PeerContext.Provider
      value={{ peerId, connected, peerList, latestMessage }}
    >
      {children}
    </PeerContext.Provider>
  );
};

PeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePeer = () => useContext(PeerContext);