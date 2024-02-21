import {ISnakeBody} from "./interfaces/snakeBody.interface";
import {SnakePosition} from "./types/snakePosition.type";

export class SnakeBody implements ISnakeBody{

    bodyPosition: SnakePosition;
    nextBodyPosition: SnakePosition;

    constructor(
        startPosition: SnakePosition,
        nextPosition: SnakePosition
    ) {
        this.bodyPosition = startPosition;
        this.nextBodyPosition = nextPosition;
    }

    move(nextBodyPosition: SnakePosition): void {
        this.bodyPosition = this.nextBodyPosition;
        this.nextBodyPosition = nextBodyPosition
        console.log(this.bodyPosition)
        console.log(this.nextBodyPosition)
    }

    getPosition(){
        return this.bodyPosition
    }

}
