import {SnakeDirection} from "./types/snakeDirection.type";

export class SnakeDirectionQueueClass {
  //TODO: Refactor directionQueue bug
  constructor(private directionQueue: SnakeDirection) {}

  getDirection() {
    return this.directionQueue;
  }

  handleDown(): void {
    if (this.directionQueue.y === -1) return;
    this.directionQueue = { x: 0, y: 1 };
  }

  handleLeft(): void {
    if (this.directionQueue.x === 1) return;
    this.directionQueue = { x: -1, y: 0 };
  }

  handleRight(): void {
    if (this.directionQueue.x === -1) return;
    this.directionQueue = { x: 1, y: 0 };
  }

  handleUp(): void {
    if (this.directionQueue.y === 1) return;
    this.directionQueue = { x: 0, y: -1 };
  }
}
