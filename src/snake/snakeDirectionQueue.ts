import {SnakeDirection} from "./types/snakeDirection.type";

export class SnakeDirectionQueue {

    constructor(
        private directionQueue: SnakeDirection
    ) {}

    getDirection(){
       return this.directionQueue
    }

    handleDown(): void {
        if(this.directionQueue.y === -1) return;
        this.directionQueue = {x: 0, y: 1}
        console.log("down")
    }

    handleLeft(): void {
        if(this.directionQueue.x === 1) return;
        this.directionQueue = {x: -1, y: 0}
    }

    handleRight(): void {
        if(this.directionQueue.x === -1) return;
        this.directionQueue = {x: 1, y: 0}
        console.log("right")
    }

    handleUp(): void {
        if(this.directionQueue.y === 1) return;
        this.directionQueue = {x: 0, y: -1}
    }
}
