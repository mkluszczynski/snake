import { GamePosition } from "../game/types/gamePosition.type";

export class Fruit {
  constructor(
    public value: number,
    public color: string,
    private position: GamePosition,
  ) {}

  getPosition(): GamePosition {
    return this.position;
  }
}
