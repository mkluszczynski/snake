import {SnakeDirection} from "./types/snakeDirection.type";
import {SnakePosition} from "./types/snakePosition.type";
import {SnakeBody} from "./snakeBody.class";
import {SnakeDirectionQueue} from "./snakeDirectionQueue";
import {GameManager} from "../game/gameManager.class";

export class Snake {
    private body: SnakeBody[] = [];
    private currentDirection: SnakeDirection;


    constructor(
        private readonly gameManager: GameManager,
        private readonly snakeMoveQueue: SnakeDirectionQueue,
        startPosition: SnakePosition,
        startDirection: SnakeDirection
    ) {
        this.currentDirection = startDirection
        //TODO: Calculate next position
        this.body.push(new SnakeBody(startPosition, {x: 1, y: 0}))
    }

    eat(): void {
        this.gameManager.addScore(1)
        this.body.push()
    }

    move(): void {
        this.setDirection(this.snakeMoveQueue.getDirection())
        this.body[0].move(this.getNextMove())
        for (let i = 1; i < this.body.length; i++) {
            this.body[i].move(this.body[i - 1].bodyPosition);
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

    getHeadPosition() {
        return this.body[0].getPosition()
    }

    getNextHeadPosition(){
        return this.body[0].getNextPosition()
    }

    private getNextMove(): SnakePosition {
        return {
            x: this.getNextHeadPosition().x + this.currentDirection.x,
            y: this.getNextHeadPosition().y + this.currentDirection.y
        }
    }

}
