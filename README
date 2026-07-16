<div align="center">

# ⛓️ Simple TypeScript Blockchain

A lightweight, educational blockchain implementation written in **TypeScript** demonstrating how **Proof of Work**, **SHA-256 hashing**, and **blockchain validation** work under the hood.

<p>
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Jest-Tested-C21325?logo=jest" alt="Jest" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" />
</p>

</div>

---

## 📖 Overview

This project was built to explore the core concepts behind blockchain technology by implementing them from scratch in TypeScript.

It includes mining, cryptographic hashing, blockchain validation, and tampering detection while keeping the codebase simple and easy to understand.

> **Note**
>
> This project is intended for educational purposes only and is **not** production-ready.

---

## ✨ Features

- 🔐 SHA-256 cryptographic hashing
- ⛏️ Proof of Work mining
- ⚙️ Adjustable mining difficulty
- 🔗 Immutable blockchain
- ✅ Blockchain validation
- 🚨 Tampering detection
- 🧪 Unit testing with Jest
- 📚 Clean and beginner-friendly code

---

## 📑 Table of Contents

- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Configuration](#%EF%B8%8F-configuration)
- [Key Concepts](#-key-concepts-demonstrated)
- [Future Improvements](#-future-improvements)
- [Testing](#-testing)
- [License](#-license)
- [Contributing](#-contributing)

---

# 🚀 Getting Started

## Prerequisites

- Node.js **18+**
- npm

## Installation

```bash
git clone https://github.com/yourusername/blockchain-ts.git

cd blockchain-ts

npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Tests

```bash
npm test

npm run test:watch

npm run test:coverage
```

---

# 💡 How It Works

### ⛏️ Mining (Proof of Work)

Every block must generate a hash beginning with a configurable number of leading zeros.

The miner repeatedly increments the nonce until a valid hash is found.

```typescript
// Difficulty 4 means hash must start with "0000"

Target: 0000xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Valid:  0000a1b2c3d4e5f6...

Invalid: 1234a1b2c3d4e5f6...
```

---

### ✅ Chain Validation

Whenever a block is added, the blockchain verifies:

- The stored hash matches the calculated hash.
- Every block correctly references the previous block.
- The blockchain has not been modified.

---

<details>

<summary><strong>📊 Sample Output</strong></summary>

```text
🚀 Starting Simple Blockchain in TypeScript
═══════════════════════════════════════════

🌍 Genesis Block created and mined!

⛏️ Mining Block 0 with data: "Genesis Block"
Target: 0000...
✅ Block mined!
Hash: 00006d7c855f9fb6...

📤 Adding Block 1...
⛏️ Mining Block 1...
✅ Block mined!

📤 Adding Block 2...
⛏️ Mining Block 2...
✅ Block mined!

📤 Adding Block 3...
⛏️ Mining Block 3...
✅ Block mined!

🔍 VALIDATING BLOCKCHAIN
✅ Blockchain is VALID!

⚠️ DEMONSTRATING TAMPERING DETECTION
❌ Block 1 hash is invalid!

📊 BLOCKCHAIN STATISTICS

Total Blocks: 4
Difficulty: 4
Total Mining Time: 328ms

✨ Blockchain Demo Complete!
```

</details>

---

# ⚙️ Configuration

Mining difficulty can be configured inside **src/main.ts**.

```typescript
const blockchain = new BlockchainService(4);
```

| Difficulty | Average Time | Recommended For |
|------------|-------------:|-----------------|
| 2 | Instant | Learning & Testing |
| 3 | <100 ms | Demonstrations |
| 4 | 0.5–2 sec | Default |
| 5 | 5–15 sec | Advanced |

---

# 🔬 Key Concepts Demonstrated

| Concept | Implementation |
|----------|----------------|
| Cryptographic Hashing | SHA-256 using `crypto-js` |
| Proof of Work | Nonce search until difficulty target is met |
| Immutable Chain | Blocks reference the previous block's hash |
| Blockchain Validation | Detects invalid or modified blocks |
| Tampering Detection | Recalculates hashes and verifies integrity |

---

# 🚀 Future Improvements

- [ ] Transaction objects
- [ ] Digital signatures (ECDSA)
- [ ] Wallet implementation
- [ ] Blockchain persistence
- [ ] REST API with Express
- [ ] Peer-to-peer networking
- [ ] Proof of Stake (PoS)
- [ ] Dynamic difficulty adjustment
- [ ] Merkle Trees
- [ ] Smart Contracts

---

# 🧪 Testing

The project uses **Jest** for unit testing.

Current test coverage includes:

- Block creation
- Hash generation
- Mining
- Blockchain initialization
- Chain validation
- Tampering detection

Run the tests:

```bash
npm test
```

Generate a coverage report:

```bash
npm run test:coverage
```

---

# 📚 Learning Resources

- Bitcoin Whitepaper
- Mastering Bitcoin
- Blockchain Demo
- TypeScript Handbook
- Node.js Crypto Documentation

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes.

```bash
git commit -m "Add some AmazingFeature"
```

4. Push your branch.

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request.

---

# 📝 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute it.

---

# 🙏 Acknowledgments

- Built to better understand blockchain fundamentals.
- Inspired by blockchain tutorials and educational resources.
- Thanks to the open-source community for their amazing work.

---

<div align="center">

**⭐ If you found this project useful, consider giving it a star!**

</div>