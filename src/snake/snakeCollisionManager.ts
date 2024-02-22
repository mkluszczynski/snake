import {FruitManager} from "../fruit/fruitManager.class";
import {Snake} from "./snake.class";
import {GameManager} from "../game/gameManager.class";

export class SnakeCollision {
    constructor(
        private readonly snake: Snake,
        private readonly fruitManager: FruitManager,
        private readonly gameManager: GameManager
    ) {}

    checkCollision(){
        if(!this.isSnakeOnFruit()) return;

        this.snake.eat()
        this.gameManager.addScore(this.fruitManager.currentFruit.value)
        this.fruitManager.spawnFruit()
    }

    isSnakeOnFruit(): boolean{
        const isOnX = this.snake.getHeadPosition().x === this.fruitManager.currentFruit.getPosition().x
        const isOnY = this.snake.getHeadPosition().y === this.fruitManager.currentFruit.getPosition().y
        return isOnX && isOnY
    }
}
