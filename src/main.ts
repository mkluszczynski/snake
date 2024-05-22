import {Snake} from "./snake/snake.class";
import {GameManager} from "./game/gameManager.class";
import {GameRenderer} from "./game/gameRenderer.class";
import {sleep} from "./utils/sleep";
import {InputManager} from "./input/inputManager.class";
import {SnakeDirectionQueueClass} from "./snake/snakeDirectionQueue.class";
import {FruitManager} from "./fruit/fruitManager.class";
import {SnakeCollision} from "./snake/snakeCollisionManager.class";
import {FRAME_TIME, WINDOW_HEIGHT, WINDOW_WIDTH} from "./utils/consts";
import {ScoreManager} from "./score/scoreManager.class";
import * as process from "process";

const snakeDirectionQueue = new SnakeDirectionQueueClass({ x: 1, y: 0 });
const snake = new Snake(snakeDirectionQueue, { x: 0, y: 0 }, { x: 1, y: 0 });
const fruitManager = new FruitManager(snake);
const scoreManager = new ScoreManager();
const gameManager = new GameManager(snake, fruitManager, scoreManager);
const gameRenderer = new GameRenderer(
    snake,
    fruitManager,
    scoreManager,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
);
const inputManager: InputManager = new InputManager(
  snakeDirectionQueue,
  gameRenderer,
);
const collisionManager = new SnakeCollision(
  snake,
  fruitManager,
  gameManager,
  gameRenderer,
);

async function main() {
  inputManager.read();
  while (!gameManager.shouldGameOver()) {
    collisionManager.checkCollision();
    if (gameManager.shouldGameOver()) break;

    gameRenderer.render();
    await sleep(FRAME_TIME);

    snake.move();
  }
  console.clear();
  if(scoreManager.shouldSave()) scoreManager.saveScore();
  console.log("Highest score: ", scoreManager.getSavedScore())
  console.log("Score: ", scoreManager.score);
  process.exit();
}
main();
