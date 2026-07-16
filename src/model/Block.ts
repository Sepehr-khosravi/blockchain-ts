import { HashUtil } from '../util/HashUtil';

export class Block {
    private index: number;
    private timestamp: number;
    private data: string;
    private previousHash: string;
    private hash: string;
    private nonce: number;
    private miningTime: number;

    constructor(index: number, data: string, previousHash: string) {
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.timestamp = Date.now();
        this.nonce = 0;
        this.hash = this.calculateHash();
        this.miningTime = 0;
    }

    calculateHash(): string {
        const input = this.index + this.timestamp + this.data + this.previousHash + this.nonce;
        return HashUtil.applySHA256(input);
    }

    mineBlock(difficulty: number): void {
        const target = '0'.repeat(difficulty);
        const startTime = Date.now();
        let attempts = 0;

        console.log(`⛏️  Mining Block ${this.index} with data: "${this.data}"`);
        console.log(`   Target: ${target}... (difficulty: ${difficulty} zeros)`);

        while (!this.hash.startsWith(target)) {
            this.nonce++;
            this.hash = this.calculateHash();
            attempts++;

            // Show progress every 100,000 attempts
            if (attempts % 100000 === 0) {
                console.log(`   ⏳ ${attempts} attempts... current hash: ${this.hash.substring(0, 8)}...`);
            }
        }

        this.miningTime = Date.now() - startTime;
        console.log(`   ✅ Block mined! Hash: ${this.hash}`);
        console.log(`   ⏱️  Time: ${this.miningTime}ms, Attempts: ${attempts}\n`);
    }

    // Getters
    getIndex(): number { return this.index; }
    getTimestamp(): number { return this.timestamp; }
    getData(): string { return this.data; }
    getPreviousHash(): string { return this.previousHash; }
    getHash(): string { return this.hash; }
    getNonce(): number { return this.nonce; }
    getMiningTime(): number { return this.miningTime; }

    // Setters (only for validation/demo purposes)
    setHash(hash: string): void { this.hash = hash; }
    setPreviousHash(previousHash: string): void { this.previousHash = previousHash; }

    toString(): string {
        return `Block{
            index=${this.index},
            timestamp=${this.timestamp},
            data='${this.data}',
            previousHash='${this.previousHash}',
            hash='${this.hash}',
            nonce=${this.nonce},
            miningTime=${this.miningTime}ms
        }`;
    }
}