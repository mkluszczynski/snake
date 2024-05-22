import {GameField} from "./gameField.class";
import {GameFieldState} from "./enums/gameFieldState.enum";
import {Snake} from "../snake/snake.class";
import {FruitManager} from "../fruit/fruitManager.class";
import process from "process";
import {ScoreManager} from "../score/scoreManager.class";

export class GameRenderer {
  private map: GameField[][];
  private width: number;
  private height: number;

  constructor(
    private readonly snake: Snake,
    private readonly fruitManager: FruitManager,
    private readonly scoreManager: ScoreManager,
    width: number,
    height: number,
  ) {
    this.width = width;
    this.height = height;
    this.map = [];
    this.initMap();
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  render(): void {
    console.clear();
    this.clearMap();
    this.mapSnakePosition();
    this.mapFruitPosition();
    this.printMap();
    process.stdout.write(`Score: ${this.scoreManager.score}`)
  }

  private printMap() {
    for (let y: number = 0; y < this.width; y++) {
      let line = "";
      for (let x: number = 0; x < this.height; x++) {
        line += this.map[y][x].color;
      }
      console.log(line);
    }
  }

  private mapSnakePosition() {
    this.snake.getCurrentPosition().forEach(({ x, y }) => {
      this.map[y][x].setState(GameFieldState.SNAKE);
      this.map[y][x].setColor(this.snake.color);
    });
  }

  private mapFruitPosition() {
    const { x, y } = this.fruitManager.currentFruit.getPosition();
    this.map[y][x].setState(GameFieldState.FRUIT);
    this.map[y][x].setColor(this.fruitManager.currentFruit.color);
  }

  private clearMap() {
    this.map.forEach((y) =>
      y.forEach((fieldValue) => {
        fieldValue.setState(GameFieldState.EMPTY);
        fieldValue.setColor(" ");
      }),
    );
  }

  private initMap(): void {
    for (let y: number = 0; y < this.width; y++) {
      this.map.push([]);
      for (let x: number = 0; x < this.height; x++) {
        this.map[y].push(new GameField());
      }
    }
  }
}
