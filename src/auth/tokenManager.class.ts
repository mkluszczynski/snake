import fs from "fs";
import { TOKEN_PATH } from "../utils/consts";

export class TokenManager {
  saveToken(token: string): void {
    fs.writeFileSync(TOKEN_PATH, token);
  }

  getToken(): string | null {
    if (!this.doesTokenExist()) return null;

    let savedToken: string = "";
    try {
      savedToken = fs.readFileSync(TOKEN_PATH, { encoding: "utf-8" });
    } catch (err) {
      console.error("Error while reading token file...", err);
    }
    return savedToken;
  }

  deleteToken(): void {
    fs.unlinkSync(TOKEN_PATH);
  }

  doesTokenExist(): boolean {
    return fs.existsSync(TOKEN_PATH);
  }
}
