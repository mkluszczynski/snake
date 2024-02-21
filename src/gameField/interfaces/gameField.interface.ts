import {GameFieldState} from "../enums/gameFieldState.enum";

export interface IGameField {
    currentState: GameFieldState;
    setState(state: GameFieldState): void;
}
