import {Snake} from "./snake/snake.class";
import {GameManager} from "./game/gameManager.class";
import {GameRenderer} from "./game/gameRenderer.class";
import {sleep} from "./utils/sleep";
import {InputManager} from "./input/inputManager.class";
import {SnakeDirectionQueueClass} from "./snake/snakeDirectionQueue.class";
import {FruitManager} from "./fruit/fruitManager.class";
import {SnakeCollision} from "./snake/snakeCollisionManager.class";
import {FRAME_TIME, WINDOW_HEIGHT, WINDOW_WIDTH} from "./utils/consts";

const snakeDirectionQueue = new SnakeDirectionQueueClass({ x: 1, y: 0 });
const snake = new Snake(snakeDirectionQueue, { x: 0, y: 0 }, { x: 1, y: 0 });
const fruitManager = new FruitManager(snake);
const gameManager = new GameManager(snake, fruitManager);
const gameRenderer = new GameRenderer(
  snake,
  fruitManager,
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
  console.log("Score: ", gameManager.score);
  process.exit();
}
main();
