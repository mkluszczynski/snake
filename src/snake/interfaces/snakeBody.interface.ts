import {SnakePosition} from "../types/snakePosition.type";

export interface ISnakeBody {
    bodyPosition: SnakePosition;
    nextBodyPosition: SnakePosition;

    move(nextBodyPosition: SnakePosition): void;
    getPosition(): SnakePosition
}
