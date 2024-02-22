import {GameField} from "./gameField.class";
import chalk from "chalk";
import {GameFieldState} from "./enums/gameFieldState.enum";
import {Snake} from "../snake/snake.class";

export class GameRenderer {

    private map: GameField[][]
    private weight: number
    private height: number

    constructor(
        private readonly snake: Snake,
        weight: number,
        height: number
    ) {
        this.weight = weight;
        this.height = height;
        this.map = []
        this.initMap()
    }

    render(): void {
        console.clear()
        this.mapSnakePosition()
        for (let y: number = 0 ; y < this.weight; y++){
            let line = ""
            for (let x: number = 0 ; x < this.height ; x++){
                switch (this.map[y][x].currentState){
                    case GameFieldState.EMPTY:
                        line += chalk.bgBlue(" ")
                        break;

                    case GameFieldState.SNAKE:
                        line += chalk.bgGreen(" ")
                }
            }
            console.log(line)
        }
    }

    private mapSnakePosition(){
        this.clearMap()
        this.snake.getCurrentPosition().forEach( ({x, y}) => {
            this.map[y][x].setState(GameFieldState.SNAKE)
        })
    }

    private clearMap(){
       this.map.forEach(y => y.forEach(fieldValue => {
           fieldValue.setState(GameFieldState.EMPTY)
       }))
    }

    private initMap(): void{
        for (let y: number = 0 ; y < this.weight; y++){
            this.map.push([]);
            for (let x: number = 0 ; x < this.height ; x++){
                this.map[y].push(new GameField())
            }
        }
    }

}
