import JSEncrypt from "jsencrypt";

export function encryptRSA(publicKey: string, data: string): string {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt(data);
    return encrypted ? encrypted : "";
}