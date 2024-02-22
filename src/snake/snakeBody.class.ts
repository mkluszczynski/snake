import {GamePosition} from "../game/types/gamePosition.type";

export class SnakeBody {

    bodyPosition: GamePosition;
    nextBodyPosition: GamePosition;

    constructor(
        startPosition: GamePosition,
        nextPosition: GamePosition
    ) {
        this.bodyPosition = startPosition;
        this.nextBodyPosition = nextPosition;
    }

    move(nextBodyPosition: GamePosition): void {
        this.bodyPosition = this.nextBodyPosition;
        this.nextBodyPosition = nextBodyPosition;
    }

    getPosition(){
        return this.bodyPosition
    }

    getNextPosition(){
        return this.nextBodyPosition
    }

}
