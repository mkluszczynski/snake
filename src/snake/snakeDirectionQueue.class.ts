import {SnakeDirection} from "./types/snakeDirection.type";

export class SnakeDirectionQueue {

  private shouldChangeDirection = true;

  constructor(private snakeDirection: SnakeDirection) {}

  getDirection(): SnakeDirection{
    return this.snakeDirection;
  }

  clearQueue(): void {
    this.shouldChangeDirection = true;
  }

  handleDown(): void {
    this.handleY({ x: 0, y: 1 });
  }

  handleLeft(): void {
    this.handleX({ x: -1, y: 0 });
  }

  handleRight(): void {
    this.handleX({ x: 1, y: 0 });
  }

  handleUp(): void {
    this.handleY({ x: 0, y: -1 });
  }

  private handleY(newSnakeDirection: SnakeDirection): void {
    if (!this.shouldChangeDirection) return;
    if (this.snakeDirection === newSnakeDirection) return;
    if (-this.snakeDirection.y === newSnakeDirection.y) return;

    this.snakeDirection = newSnakeDirection;
    this.shouldChangeDirection = false;
  }

  private handleX(newSnakeDirection: SnakeDirection): void {
    if (!this.shouldChangeDirection) return;
    if (this.snakeDirection === newSnakeDirection) return;
    if (-this.snakeDirection.x === newSnakeDirection.x) return;

    this.snakeDirection = newSnakeDirection;
    this.shouldChangeDirection = false;
  }
}
