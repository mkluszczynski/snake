import {IGameField} from "./interfaces/gameField.interface";
import {GameFieldState} from "./enums/gameFieldState.enum";

export class GameField implements IGameField {
    currentState: GameFieldState = GameFieldState.EMPTY;

    setState(state:GameFieldState): void {
        this.currentState = state;
    }
}
