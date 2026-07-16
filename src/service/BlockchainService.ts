import { Block } from '../model/Block';
import { MiningService } from './MiningService';

export class BlockchainService {
    private chain: Block[];
    private difficulty: number;
    private miningService: MiningService;

    constructor(difficulty: number) {
        this.chain = [];
        this.difficulty = difficulty;
        this.miningService = new MiningService(difficulty);
        this.createGenesisBlock();
    }

    private createGenesisBlock(): void {
        const genesisBlock = new Block(0, 'Genesis Block', '0');
        this.miningService.mineBlock(genesisBlock);
        this.chain.push(genesisBlock);
        console.log('🌍 Genesis Block created and mined!\n');
    }

    addBlock(data: string): void {
        const newIndex = this.chain.length;
        const previousHash = this.chain[this.chain.length - 1].getHash();
        const newBlock = new Block(newIndex, data, previousHash);
        this.miningService.mineBlock(newBlock);
        this.chain.push(newBlock);
    }

    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    getChain(): Block[] {
        return this.chain;
    }

    getDifficulty(): number {
        return this.difficulty;
    }

    setDifficulty(difficulty: number): void {
        this.difficulty = difficulty;
        this.miningService.setDifficulty(difficulty);
    }

    printBlockchain(): void {
        console.log(`\n📦 BLOCKCHAIN (${this.chain.length} blocks)`);
        console.log('═══════════════════════════════════════════');

        for (const block of this.chain) {
            console.log(`Block #${block.getIndex()}`);
            console.log(`  📝 Data: ${block.getData()}`);
            console.log(`  🔗 Hash: ${block.getHash()}`);
            console.log(`  🔙 Previous: ${block.getPreviousHash()}`);
            console.log(`  🔢 Nonce: ${block.getNonce()}`);
            console.log(`  ⏱️  Mining Time: ${block.getMiningTime()}ms`);
            console.log('  ─────────────────────────');
        }
    }
}