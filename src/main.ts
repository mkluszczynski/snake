import {Snake} from "./snake/snake.class";
import {GameManager} from "./gameManger/gameManager.class";
import {GameRenderer} from "./gameRenderer/gameRenderer.class";
import {sleep} from "./utils/sleep";
import {InputManager} from "./inputManager/inputManager.class";
import {SnakeDirectionQueue} from "./snake/snakeDirectionQueue";

const gameManager = new GameManager();
const snakeDirectionQueue = new SnakeDirectionQueue({x: 1, y: 0})
const snake = new Snake(gameManager, snakeDirectionQueue, {x: 0, y: 0}, {x: 1, y: 0});
const gameRenderer = new GameRenderer(snake, 20, 30)
const inputManager: InputManager = new InputManager(snakeDirectionQueue, gameRenderer);

async function main(){
    inputManager.read()
    while (!gameManager.shouldGameOver()){
        snake.move()
        gameRenderer.render()
        await sleep(100)
    }
}
main();
