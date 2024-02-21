import {IGameManager} from "../../gameManger/gameManger.interface";
import {SnakePosition} from "../types/snakePosition.type";
import {SnakeDirection} from "../types/snakeDirection.type";
import {ISnakeBody} from "./snakeBody.interface";

export interface ISnake{
    setDirection(snakeDirection: SnakeDirection): void;
    getDirection():void
    getCurrentPosition(): SnakePosition[]
    move(): void;
    eat(): void;
}
