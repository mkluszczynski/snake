import { GameField } from "./gameField.class";
import chalk from "chalk";
import { GameFieldState } from "./enums/gameFieldState.enum";
import { Snake } from "../snake/snake.class";
import { FruitManager } from "../fruit/fruitManager.class";
import { sleep } from "../utils/sleep";

export class GameRenderer {
  private map: GameField[][];
  private weight: number;
  private height: number;

  constructor(
    private readonly snake: Snake,
    private readonly fruitManager: FruitManager,
    weight: number,
    height: number,
  ) {
    this.weight = weight;
    this.height = height;
    this.map = [];
    this.initMap();
  }

  render(): void {
    console.clear();
    this.clearMap();
    this.mapSnakePosition();
    this.mapFruitPosition();
    this.printMap();
  }

  private printMap() {
    for (let y: number = 0; y < this.weight; y++) {
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
    for (let y: number = 0; y < this.weight; y++) {
      this.map.push([]);
      for (let x: number = 0; x < this.height; x++) {
        this.map[y].push(new GameField());
      }
    }
  }
}
