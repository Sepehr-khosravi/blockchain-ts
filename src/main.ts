import { Block } from './model/Block';
import { BlockchainService } from './service/BlockchainService';
import { BlockchainValidator } from './validation/BlockchainValidator';

console.log('🚀 Starting Simple Blockchain in TypeScript');
console.log('═══════════════════════════════════════════\n');

// Create blockchain with difficulty 4
const blockchain = new BlockchainService(4);
const validator = new BlockchainValidator();

// Add some blocks
console.log('📤 Adding Block 1...');
blockchain.addBlock('Alice pays Bob 10 BTC');

console.log('📤 Adding Block 2...');
blockchain.addBlock('Bob pays Charlie 5 BTC');

console.log('📤 Adding Block 3...');
blockchain.addBlock('Charlie pays Dave 2 BTC');

// Display blockchain
blockchain.printBlockchain();

// Validate blockchain
console.log('\n🔍 VALIDATING BLOCKCHAIN');
console.log('─────────────────────────────');
validator.isChainValid(blockchain.getChain());

// Demo: Tampering detection
console.log('\n⚠️  DEMONSTRATING TAMPERING DETECTION');
console.log('─────────────────────────────────────');
console.log('Attempting to modify Block 1 data...');

// Tamper with block
const tamperedBlock = blockchain.getChain()[1];
tamperedBlock.setHash('0000faked');
tamperedBlock.setPreviousHash('0000fake');

console.log('Block 1 after tampering:');
console.log(`  New Hash: ${tamperedBlock.getHash()}`);
console.log(`  New Prev: ${tamperedBlock.getPreviousHash()}`);

console.log('\nValidating tampered chain:');
validator.isChainValid(blockchain.getChain());

// Show statistics
console.log('\n📊 BLOCKCHAIN STATISTICS');
console.log('─────────────────────────');
console.log(`Total Blocks: ${blockchain.getChain().length}`);
console.log(`Difficulty: ${blockchain.getDifficulty()}`);

const totalMiningTime = blockchain.getChain()
    .reduce((sum, block) => sum + block.getMiningTime(), 0);
console.log(`Total Mining Time: ${totalMiningTime}ms`);

const totalNonce = blockchain.getChain()
    .reduce((sum, block) => sum + block.getNonce(), 0);
console.log(`Total Nonce Attempts: ${totalNonce}`);

console.log('\n✨ Blockchain Demo Complete!');