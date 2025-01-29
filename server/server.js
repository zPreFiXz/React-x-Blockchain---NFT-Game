const express = require("express");
const bodyParser = require("body-parser");
const { PeerServer } = require("peer");
const Blockchain = require("./blockchain");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Socker.io
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// PeerJS Server
let peerList = [];
let latestMessage = "";
let receivedTime = "";

const peerConnections = new Map();
const peerServer = PeerServer({ port: 9000, path: "/peerjs" });

peerServer.on("connection", (client) => {
  console.log(`✅ Peer connected: ${client.id}`);

  if (!peerList.includes(client.id)) {
    peerList.push(client.id);
  }

  peerConnections.set(client.id, client);
  setTimeout(() => {
    io.emit("send_peers", {
      peerList,
      latestMessage,
    });
  }, 100);
});

peerServer.on("disconnect", (client) => {
  console.log(`❌ Peer disconnected: ${client.id}`);
  peerConnections.delete(client.id);
  peerList = peerList.filter((peerId) => peerId !== client.id);

  io.emit("send_peers", { peerList, latestMessage });
});

function broadcast_msg(message, ttl) {
  if (ttl <= 0) return;

  peerList.forEach((peerId) => {
    if (peerConnections.has(peerId)) {
      const peerConnection = peerConnections.get(peerId);
      peerConnection.send({ type: "broadcast_msg", message, ttl: ttl - 1 });
    }
  });
}

app.get("/home", (req, res) => {
  res.json({
    peerList: peerList,
    latestMessage: latestMessage,
    receivedTime: receivedTime,
  });
});

app.post("/send_msg", (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Invalid message format" });
  }

  broadcast_msg(message, 2);

  latestMessage = message;
  receivedTime = new Date().toLocaleString("th-TH");
  io.emit("new_message", { latestMessage, receivedTime });

  res.json({ message: "Message broadcasted to peers" });
});

// BlockchainFront-facing API
const blockchain = new Blockchain();

app.get("/block", (req, res) => {
  res.json(blockchain.getAllBlocks());
});

app.get("/block/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid block ID" });
  }

  const block = blockchain.getBlockById(id);
  res.json(block || { error: "Block not found" });
});

app.get("/transaction/:id", (req, res) => {
  const transaction = blockchain.getTransactionById(parseInt(req.params.id));
  res.json(transaction || { error: "Transaction not found" });
});

app.post("/transaction", (req, res) => {
  const { from, to, amount, data } = req.body;
  const index = blockchain.addTransaction(from, to, amount, data);
  res.json({ message: `Transaction will be added to block ${index}` });
});

app.get("/amount", (req, res) => {
  res.json(blockchain.getLedgerState());
});

app.get("/nft", (req, res) => {
  res.json(blockchain.getNFTState());
});

app.get("/auction", (req, res) => {
  res.json(blockchain.getActiveAuctions());
});

// Network-facing API

server.listen(PORT, () => {
  console.log(`API running on http://localhost:3000`);
});

console.log("PeerJS Server is running on http://localhost:9000/peerjs");
