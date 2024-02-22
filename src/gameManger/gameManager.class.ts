export class GameManager{
    isGameOver: boolean = false;
    score: number = 0;

    addScore(score: number): void {
    }

    shouldGameOver(): boolean {
        return this.isGameOver;
    }

}
