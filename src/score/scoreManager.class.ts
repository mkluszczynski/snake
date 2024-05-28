import * as fs from "fs";
import { SAVE_PATH } from "../utils/consts";

export class ScoreManager {
  private _score: number = 0;

  get score(): number {
    return this._score;
  }

  addScore(value: number = 1): void {
    this._score += value;
  }

  saveScore(): void {
    fs.writeFileSync(SAVE_PATH, this._score.toString());
  }

  getSavedScore(): number {
    let savedScore: number = 0;
    try {
      savedScore = +fs.readFileSync(SAVE_PATH, { encoding: "utf-8" });
    } catch (err) {
      console.error("Error while reading save file...", err);
    }
    return savedScore;
  }

  shouldSave(): boolean {
    return this._score > this.getSavedScore();
  }
}
