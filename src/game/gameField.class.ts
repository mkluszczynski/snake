import { GameFieldState } from "./enums/gameFieldState.enum";

export class GameField {
  currentState: GameFieldState = GameFieldState.EMPTY;
  color: string = " ";

  setState(state: GameFieldState): void {
    this.currentState = state;
  }

  setColor(color: string) {
    this.color = color;
  }
}
