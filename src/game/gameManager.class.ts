import { FruitManager } from "../fruit/fruitManager.class";
import { Snake } from "../snake/snake.class";

export class GameManager {
  isGameOver: boolean = false;
  score: number = 0;

  constructor(
    private readonly snake: Snake,
    private readonly fruitManager: FruitManager,
  ) {}

  addScore(): void {
    this.snake.eat();
    this.fruitManager.spawnFruit();
    this.score += this.fruitManager.currentFruit.value;
  }

  onCollisionOccurred() {
    this.isGameOver = true;
  }

  shouldGameOver(): boolean {
    return this.isGameOver;
  }
}
