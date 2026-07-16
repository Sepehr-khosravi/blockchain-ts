import { Block } from '../src/model/Block';
import { BlockchainService } from '../src/service/BlockchainService';
import { BlockchainValidator } from '../src/validation/BlockchainValidator';

describe('Blockchain Tests', () => {
    test('Block creation should generate valid hash', () => {
        const block = new Block(0, 'Test Data', '0');
        expect(block.getHash()).toBeDefined();
        expect(block.getHash().length).toBe(64); // SHA-256 = 64 hex chars
    });

    test('Blockchain should create genesis block', () => {
        const bc = new BlockchainService(4);
        expect(bc.getChain().length).toBe(1);
        expect(bc.getChain()[0].getData()).toBe('Genesis Block');
    });

    test('Should add new block to chain', () => {
        const bc = new BlockchainService(4);
        bc.addBlock('Test Block');
        expect(bc.getChain().length).toBe(2);
        expect(bc.getLatestBlock().getData()).toBe('Test Block');
    });

    test('Blockchain validation should pass for valid chain', () => {
        const bc = new BlockchainService(4);
        bc.addBlock('Block 1');
        bc.addBlock('Block 2');
        const validator = new BlockchainValidator();
        expect(validator.isChainValid(bc.getChain())).toBe(true);
    });

    test('Should detect tampering', () => {
        const bc = new BlockchainService(4);
        bc.addBlock('Block 1');
        const block = bc.getChain()[1];
        block.setHash('tampered');
        const validator = new BlockchainValidator();
        expect(validator.isChainValid(bc.getChain())).toBe(false);
    });

    test('Should detect broken chain link', () => {
        const bc = new BlockchainService(4);
        bc.addBlock('Block 1');
        bc.addBlock('Block 2');
        const block = bc.getChain()[2];
        block.setPreviousHash('brokenlink');
        const validator = new BlockchainValidator();
        expect(validator.isChainValid(bc.getChain())).toBe(false);
    });
});