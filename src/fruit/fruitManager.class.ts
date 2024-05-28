import {Snake} from "../snake/snake.class";
import {Fruit} from "./fruit.class";
import {FruitMeta} from "./types/fruitMeta.type";
import chalk from "chalk";
import {GamePosition} from "../game/types/gamePosition.type";
import {WINDOW_HEIGHT, WINDOW_WIDTH} from "../utils/consts";

export class FruitManager {

    currentFruit: Fruit
    fruitList: FruitMeta[] = [
        { value: 1, color: chalk.bgRed(" ") }
    ]

    constructor(
        private readonly snake: Snake
    ) {
        this.spawnFruit()
        this.currentFruit = this.getCurrentFruit()
    }

    spawnFruit(){
        do{
            var x = Math.floor(Math.random() * WINDOW_WIDTH);
            var y = Math.floor(Math.random() * WINDOW_HEIGHT);
        }
        while (!this.isPositionValid({x, y}))

        const fruitMeta = this.getRandomFruitMeta()
        this.currentFruit = new Fruit(fruitMeta.value, fruitMeta.color, {x, y})
    }

    getCurrentFruit(){
        return this.currentFruit
    }

    private getRandomFruitMeta(): FruitMeta {
        const randomIndex = Math.floor(Math.random() * this.fruitList.length)
        return this.fruitList[randomIndex]
    }

    private isPositionValid(position: GamePosition): boolean {
        const isOnSnake = this.snake.getHeadPosition() === position;
        const isOnSnakeBody = !this.snake.getCurrentPosition().includes(position);

        return isOnSnake && isOnSnakeBody;
    }

}
