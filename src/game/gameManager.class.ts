import {FruitManager} from "../fruit/fruitManager.class";
import {Snake} from "../snake/snake.class";
import {ScoreManager} from "../score/scoreManager.class";

export class GameManager {
  isGameOver: boolean = false;

  constructor(
    private readonly snake: Snake,
    private readonly fruitManager: FruitManager,
    private readonly scoreManager: ScoreManager
  ) {}

  addScore(): void {
    this.snake.eat();
    this.fruitManager.spawnFruit();
    this.scoreManager.addScore(this.fruitManager.currentFruit.value);
  }

  onCollisionOccurred() {
    this.isGameOver = true;
  }

  shouldGameOver(): boolean {
    return this.isGameOver;
  }
}
