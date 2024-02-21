import {ISnake} from "./interfaces/snake.interface";
import {ISnakeBody} from "./interfaces/snakeBody.interface";
import {SnakeDirection} from "./types/snakeDirection.type";
import {IGameManager} from "../gameManger/gameManger.interface";
import {SnakePosition} from "./types/snakePosition.type";
import {SnakeBody} from "./snakeBody.class";
import {SnakeDirectionQueue} from "./SnakeDirectionQueue";

export class Snake implements ISnake{
    private body: ISnakeBody[] = [];
    private currentDirection: SnakeDirection;


    constructor(
        private readonly gameManager: IGameManager,
        private readonly snakeMoveQueue: SnakeDirectionQueue,
        startPosition: SnakePosition,
        startDirection: SnakeDirection
    ) {
        this.currentDirection = startDirection
        this.body.push(new SnakeBody(startPosition, ))
    }

    eat(): void {
        this.gameManager.addScore(1)
        this.body.push()
    }

    move(): void {
        this.setDirection(this.snakeMoveQueue.getDirection())
        this.body[0].move(this.getNextMove())
        for(let i = 1 ; i < this.body.length ; i++){
            this.body[i].move(this.body[i-1].bodyPosition);
        }
    }

    getCurrentPosition(): SnakePosition[] {
        return this.body.map(element => element.bodyPosition)
    }
    setDirection(snakeDirection: SnakeDirection): void {
        this.currentDirection = snakeDirection;
    }

    getDirection() {
        return this.currentDirection
    }

    getHeadPosition(){
        return this.body[0].getPosition()
    }

    private getNextMove(): SnakePosition {
        return {
            x: this.getHeadPosition().x + this.currentDirection.x,
            y: this.getHeadPosition().y + this.currentDirection.y
        }
    }

}
