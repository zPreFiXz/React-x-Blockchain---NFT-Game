const express = require("express");
const bodyParser = require("body-parser");
const { PeerServer } = require("peer");
const Blockchain = require("./blockchain");
const Player = require("./player");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

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

const players = [];

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

  let player = players.find((player) => player.id === `${client.id}`);

  if (!player) {
    player = new Player({
      id: client.id,
    });
    players.push(player);
  }
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

//test api players
app.get("/account/:id", (req, res) => {
  const playerId = req.params.id;

  if (!playerId) {
    return res.status(404).json({ message: "Player not found" });
  }

  let player = players.find((player) => player.id === playerId);

  res.json(player);
});

app.get("/players", (req, res) => {
  res.json(players);
});

app.post("/selecteRegion", (req, res) => {
  const { playerId, region } = req.body;

  if (!playerId || !region) {
    return res.status(400).json({ error: "Missing playerId or region" });
  }

  let player = players.find((player) => player.id === playerId);

  if (!player) {
    console.log("Player not found");
    return res.status(404).json({ error: "Player not found" });
  }

  player.region = region;
});

let grovermentMarket = [
  {
    resource: "wood",
    amount: 1,
    price: 100,
  },
  {
    resource: "cement",
    amount: 1,
    price: 300,
  },
  {
    resource: "iron",
    amount: 1,
    price: 500,
  },
  {
    resource: "timber",
    amount: 1,
    price: 75,
  },
  {
    resource: "bigStone",
    amount: 1,
    price: 100,
  },
  {
    resource: "crudeCoal",
    amount: 1,
    price: 150,
  },
  {
    resource: "crudeOil",
    amount: 1,
    price: 200,
  },
];

app.get("/grovermentMarket", (req, res) => {
  res.json(grovermentMarket);
});

app.post("/buySellGroverment", (req, res) => {
  const { type, playerId, resource, amount, price } = req.query;

  let player = players.find((p) => p.id === playerId);

  if (!player) {
    return res
      .status(404)
      .json({ success: false, message: "player not found!" });
  }

  const result = player.buySellGroverment(
    type,
    resource,
    Number(amount),
    Number(price)
  );
  res.json(result);
});

let privateMarket = [];

app.get("/privateMarket", (req, res) => {
  res.json(privateMarket);
});

app.post("/setOrder", (req, res) => {
  // const type = "buy";
  // const from = "f9dd162d-5bf1-4cf1-88fc-25d0393a93f7";
  // const resource = "wood";
  // const amount = 100;
  // const price = 100;

  const { type, from, resource, amount, price } = req.body;

  if (!type || !from || !resource || !amount || !price) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete information" });
  }

  const fromPlayer = players.find((player) => player.id === from);

  if (!fromPlayer) {
    return res
      .status(404)
      .json({ success: false, message: "player not found!" });
  }

  const result = fromPlayer.setOrder(
    type,
    resource,
    Number(amount),
    Number(price)
  );

  const order = {
    id: uuidv4(),
    type,
    from,
    resource,
    amount,
    price,
  };

  privateMarket.push(order);
  res.json({ success: true, message: "ตั้งคำสั่งสำเร็จ!", result });
});

app.post("/cancelOrder", (req, res) => {
  const { id, from } = req.body;

  if (!id || !from) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete information!" });
  }

  const orderIndex = privateMarket.findIndex((order) => order.id == id);
  const order = privateMarket.find((order) => order.id == id);

  if (orderIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "ID Order not found!" });
  }

  const fromPlayer = players.find((player) => player.id == from);

  if (!fromPlayer) {
    return res
      .status(404)
      .json({ success: false, message: "From player not found!" });
  }

  const result = fromPlayer.cancelOrder(
    order.type,
    order.resource,
    Number(order.amount),
    Number(order.price)
  );

  privateMarket.splice(orderIndex, 1);

  res.json({ success: true, message: "cancel successfuly!", result });
});

app.post("/buySellPrivate", (req, res) => {
  // const pId = "95b63bd3-5875-4a03-8f10-7d9d0d6aa03b";
  // const id = 123;
  // const type = 'buy';
  // const from = 'f9dd162d-5bf1-4cf1-88fc-25d0393a93f7';
  // const resource = 'wood';
  // const amount = 100;
  // const price = 100;

  const { pId, id, type, from, resource, amount, price } = req.body;
  if (!pId || !id || !type || !from || !resource || !amount || !price) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete information" });
  }

  const fromPlayer = players.find((player) => player.id === from);
  if (!fromPlayer) {
    return res
      .status(404)
      .json({ success: false, message: "from player not found!" });
  }

  const playerId = players.find((player) => player.id === pId);
  if (!playerId) {
    return res
      .status(404)
      .json({ success: false, message: "player not found!" });
  }

  const orderIndex = privateMarket.findIndex((order) => order.id === id);
  if (orderIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Order not found!" });
  }

  const pt = playerId.buysellPrivate(
    type,
    resource,
    Number(amount),
    Number(price)
  );
  const fp = fromPlayer.SuccessfulTrade(
    type,
    resource,
    Number(amount),
    Number(price)
  );

  privateMarket.splice(orderIndex, 1);

  res.json({ success: true, message: "successfuly", pt, fp });
});
