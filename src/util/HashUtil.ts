import * as CryptoJS from 'crypto-js';

export class HashUtil {
    static applySHA256(input: string): string {
        return CryptoJS.SHA256(input).toString();
    }
}