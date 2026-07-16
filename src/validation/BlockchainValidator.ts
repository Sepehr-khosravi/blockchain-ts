import { Block } from '../model/Block';

export class BlockchainValidator {
    isChainValid(chain: Block[]): boolean {
        if (!chain || chain.length === 0) {
            console.log('❌ Chain is empty or null!');
            return false;
        }

        // Check genesis block
        const genesis = chain[0];
        if (genesis.getPreviousHash() !== '0') {
            console.log("❌ Genesis block should have previous hash '0'!");
            return false;
        }

        // Validate all blocks
        for (let i = 0; i < chain.length; i++) {
            const currentBlock = chain[i];

            // Verify block's hash is correct
            const calculatedHash = currentBlock.calculateHash();
            if (currentBlock.getHash() !== calculatedHash) {
                console.log(`❌ Block ${i} hash is invalid!`);
                console.log(`   Stored: ${currentBlock.getHash()}`);
                console.log(`   Calc:   ${calculatedHash}`);
                return false;
            }

            // Verify link to previous block (except genesis)
            if (i > 0) {
                const previousBlock = chain[i - 1];
                if (currentBlock.getPreviousHash() !== previousBlock.getHash()) {
                    console.log(`❌ Block ${i} previous hash doesn't match!`);
                    console.log(`   Expected: ${previousBlock.getHash()}`);
                    console.log(`   Found:    ${currentBlock.getPreviousHash()}`);
                    return false;
                }
            }
        }

        console.log(`✅ Blockchain is VALID! All ${chain.length} blocks verified.`);
        return true;
    }

    validateBlock(block: Block, previousBlock: Block | null): boolean {
        // Check hash
        const calculatedHash = block.calculateHash();
        if (block.getHash() !== calculatedHash) {
            console.log('❌ Block hash mismatch!');
            return false;
        }

        // Check link
        if (previousBlock && block.getPreviousHash() !== previousBlock.getHash()) {
            console.log('❌ Block link to previous block is broken!');
            return false;
        }

        return true;
    }
}