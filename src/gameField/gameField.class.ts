import {GameFieldState} from "./enums/gameFieldState.enum";

export class GameField {
    currentState: GameFieldState = GameFieldState.EMPTY;

    setState(state:GameFieldState): void {
        this.currentState = state;
    }
}
