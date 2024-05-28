import { FruitManager } from "../fruit/fruitManager.class";
import { Snake } from "./snake.class";
import { GameManager } from "../game/gameManager.class";
import { GameRenderer } from "../game/gameRenderer.class";

export class SnakeCollision {
  constructor(
    private readonly snake: Snake,
    private readonly fruitManager: FruitManager,
    private readonly gameManager: GameManager,
    private readonly gameRenderer: GameRenderer,
  ) {}

  checkCollision() {
    if (this.isSnakeOnFruit()) this.gameManager.addScore();
    if (this.isSnakeOnSnake()) this.gameManager.onCollisionOccurred();
    if (this.isSnakeOutOfTheMap()) this.gameManager.onCollisionOccurred();
  }

  isSnakeOnFruit(): boolean {
    const isOnX =
      this.snake.getHeadPosition().x ===
      this.fruitManager.currentFruit.getPosition().x;
    const isOnY =
      this.snake.getHeadPosition().y ===
      this.fruitManager.currentFruit.getPosition().y;
    return isOnX && isOnY;
  }

  isSnakeOnSnake(): boolean {
    const snakePosition = this.snake.getHeadPosition();
    const snakeBodyPosition = this.snake.getCurrentPosition();
    snakeBodyPosition.splice(0, 2);
    const index = snakeBodyPosition.findIndex(
      (bodyPosition) =>
        bodyPosition.x === snakePosition.x &&
        bodyPosition.y === snakePosition.y,
    );

    if (index === -1) return false;
    return true;
  }

  isSnakeOutOfTheMap(): boolean {
    const snakeHeadPosition = this.snake.getHeadPosition();
    if (
      snakeHeadPosition.x < 0 ||
      snakeHeadPosition.x >= this.gameRenderer.getHeight()
    ) {
      return true;
    }

    if (
      snakeHeadPosition.y < 0 ||
      snakeHeadPosition.y >= this.gameRenderer.getWidth()
    ) {
      return true;
    }

    return false;
  }
}
