import * as process from "process";
import { GameRenderer } from "../game/gameRenderer.class";
import { SnakeDirectionQueue } from "../snake/snakeDirectionQueue.class";

export class InputManager {
  constructor(
    private readonly snakeDirectionQueue: SnakeDirectionQueue,
    private readonly gameRenderer: GameRenderer,
  ) {}

  read() {
    require("node:readline").emitKeypressEvents(process.stdin);

    if (process.stdin.isTTY) process.stdin.setRawMode(true);

    process.stdin.on("keypress", (chunk, key) => {
      if (!key) return;

      switch (key.name) {
        case "left":
          this.snakeDirectionQueue.handleLeft();
          break;
        case "right":
          this.snakeDirectionQueue.handleRight();
          break;
        case "up":
          this.snakeDirectionQueue.handleUp();
          break;
        case "down":
          this.snakeDirectionQueue.handleDown();
          break;
        case "q":
          process.exit(0);
      }
    });
  }
}
