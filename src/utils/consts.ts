import * as path from "path";

export const WINDOW_HEIGHT: number = process.stdout.rows - 1;
export const WINDOW_WIDTH: number = process.stdout.columns - 1;
export const FRAME_TIME: number = 100;
export const SAVE_DIR: string = "data"
export const SAVE_FILE: string = "score.save"
export const SAVE_PATH: string = path.join(SAVE_DIR, SAVE_FILE)
