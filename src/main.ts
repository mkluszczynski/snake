import {Snake} from "./snake/snake.class";
import {GameManager} from "./game/gameManager.class";
import {GameRenderer} from "./game/gameRenderer.class";
import {sleep} from "./utils/sleep";
import {InputManager} from "./input/inputManager.class";
import {SnakeDirectionQueue} from "./snake/snakeDirectionQueue";
import {FruitManager} from "./fruit/fruitManager.class";
import {SnakeCollision} from "./snake/snakeCollisionManager";

const gameManager = new GameManager();
const snakeDirectionQueue = new SnakeDirectionQueue({x: 1, y: 0})
const snake = new Snake(gameManager, snakeDirectionQueue, {x: 0, y: 0}, {x: 1, y: 0});
const fruitManager = new FruitManager(snake)
const gameRenderer = new GameRenderer(snake, fruitManager, 20, 30)
const inputManager: InputManager = new InputManager(snakeDirectionQueue, gameRenderer);
const collisionManager = new SnakeCollision(snake, fruitManager, gameManager)

async function main(){
    inputManager.read()
    while (!gameManager.shouldGameOver()){
        collisionManager.checkCollision()
        gameRenderer.render()
        await sleep(100)
        snake.move()
    }
}
main();
