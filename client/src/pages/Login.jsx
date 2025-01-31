import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import Peer from "peerjs";
import { io } from "socket.io-client";
import loginBackground from "../assets/images/loginBackground.png";
import crown from "../assets/images/crown.png";

// Socket.io
const socket = io("http://localhost:3000");

function Login() {
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
    <div className="flex justify-center items-center">
      <img src={loginBackground} className="w-full h-screen" />
      <div className="absolute flex flex-col items-center w-[646.78px] h-auto rounded-[15px] bg-white/90">
        <img src={crown} className="w-[287.54px] h-[114.41px] mt-[17.54px]" />
        <p className="mt-[17.54px] text-black text-[45.76px] font-bold">
          KING OF ECONOMY
        </p>
        <Link to="/Region">
          <button className="flex justify-center items-center w-[433.22px] h-[78.56px] gap-[28.22px] px-[28.98px] py-[6.1px] mt-[54.07px] mb-[69.53px] rounded-[38.14px] bg-[#235789] cursor-pointer">
            <svg
              width={34}
              height={32}
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M15.466 7.2966L13.1168 9.66948L17.4795 14.0763H0.364258V17.4661H17.4795L13.1168 21.8729L15.466 24.2458L23.8558 15.7712L15.466 7.2966ZM30.5676 27.6356H17.1439V31.0254H30.5676C32.4134 31.0254 33.9236 29.5 33.9236 27.6356V3.90677C33.9236 2.04236 32.4134 0.516937 30.5676 0.516937H17.1439V3.90677H30.5676V27.6356Z"
                fill="white"
              />
            </svg>
            <p className="text-white text-[36.61px] font-bold">Login</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
