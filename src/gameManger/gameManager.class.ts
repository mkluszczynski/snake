import {IGameManager} from "./gameManger.interface";

export class GameManager implements IGameManager{
    isGameOver: boolean = false;
    score: number = 0;

    addScore(score: number): void {
    }

    shouldGameOver(): boolean {
        return this.isGameOver;
    }

}
