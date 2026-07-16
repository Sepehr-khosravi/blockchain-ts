import { Block } from '../model/Block';

export class MiningService {
    private difficulty: number;

    constructor(difficulty: number) {
        this.difficulty = difficulty;
    }

    mineBlock(block: Block): void {
        block.mineBlock(this.difficulty);
    }

    setDifficulty(difficulty: number): void {
        this.difficulty = difficulty;
    }

    getDifficulty(): number {
        return this.difficulty;
    }
}