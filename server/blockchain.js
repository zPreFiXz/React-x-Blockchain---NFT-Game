const crypto = require("crypto");

class Blockchain {
  constructor() {
    this.blocks = [];
    this.currentTransactions = [];
    this.ledger = {};
    this.nftState = [];
    this.activeAuctions = [];
    this.createBlock(1, "0");
  }

  createBlock(nonce, previousHash) {
    const block = {
      id: this.blocks.length + 1,
      timeStamp: Date.now(),
      transactions: this.currentTransactions,
      nonce,
      previousHash,
      hash: this.hashBlock(nonce, previousHash, this.currentTransactions),
    };
    this.currentTransactions.forEach((tx) => {
      this.updateLedger(tx);
    });
    this.currentTransactions = [];
    this.blocks.push(block);

    return block;
  }

  hashBlock(nonce, previousHash, transactions) {
    const blockString = `${nonce}${previousHash}${JSON.stringify(
      transactions
    )}`;
    return crypto.createHash("sha256").update(blockString).digest("hex");
  }

  getAllBlocks() {
    return this.blocks.map((block) => {
      const totalSent = block.transactions.reduce(
        (sum, tx) => sum + tx.amount,
        0
      );
      const totalFees = block.transactions.reduce(
        (sum, tx) => sum + (tx.fee || 0),
        0
      );
      const size = JSON.stringify(block).length;

      return {
        id: block.id,
        hash: block.hash,
        txCount: block.transactions.length,
        nonce: block.nonce,
        size,
        totalSent,
        totalFees,
      };
    });
  }

  getBlockById(id) {
    return this.blocks.find((block) => block.id === id);
  }

  addTransaction(from, to, amount, data) {
    this.currentTransactions.push({ from, to, amount, data });
    return this.blocks.length + 1;
  }

  getTransantionById(id) {
    for (const block of this.blocks) {
      const transactions = block.transactions.find((tx) => tx.id === id);
      if (transactions) {
        return transactions;
      }

      return null;
    }
  }

  updateLedger(transaction) {
    const { from, to, amount } = transaction;
    if (from) {
      this.ledger[from] = (this.ledger[from] || 0) - amount;
    }
    if (to) {
      this.ledger[to] = (this.ledger[to] || 0) + amount;
    }
  }

  getLedgerState() {
    return this.ledger;
  }

  getNFTState() {
    return this.nftState;
  }

  getActiveAuctions() {
    return this.activeAuctions;
  }
}

module.exports = Blockchain;
