import { Snake } from "./snake/snake.class";
import { GameManager } from "./game/gameManager.class";
import { GameRenderer } from "./game/gameRenderer.class";
import { sleep } from "./utils/sleep";
import { InputManager } from "./input/inputManager.class";
import { SnakeDirectionQueue } from "./snake/snakeDirectionQueue";
import { FruitManager } from "./fruit/fruitManager.class";
import { SnakeCollision } from "./snake/snakeCollisionManager";

const snakeDirectionQueue = new SnakeDirectionQueue({ x: 1, y: 0 });
const snake = new Snake(snakeDirectionQueue, { x: 0, y: 0 }, { x: 1, y: 0 });
const fruitManager = new FruitManager(snake);
const gameManager = new GameManager(snake, fruitManager);
const gameRenderer = new GameRenderer(
  snake,
  fruitManager,
  process.stdout.rows - 1,
  process.stdout.columns - 1,
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
    await sleep(100);
    snake.move();
  }
  console.clear();
  console.log("Score: ", gameManager.score);
  process.exit();
}
main();
