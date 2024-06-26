import * as path from "path";

export const WINDOW_HEIGHT: number = process.stdout.rows - 1;
export const WINDOW_WIDTH: number = process.stdout.columns - 1;
export const FRAME_TIME: number = 100;
export const SAVE_DIR: string = "data";
export const SAVE_FILE: string = "score.save";
export const SAVE_PATH: string = path.join(
  __dirname,
  "..",
  SAVE_DIR,
  SAVE_FILE,
);

export const API_URL: string = "https://snake-leaderboard.mkluszczynski.dev";
export const TOKEN_FILE: string = "token.save";
export const TOKEN_PATH: string = path.join(
  __dirname,
  "..",
  SAVE_DIR,
  TOKEN_FILE,
);
