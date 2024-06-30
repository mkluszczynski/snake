import { Snake } from "./snake/snake.class";
import { GameManager } from "./game/gameManager.class";
import { GameRenderer } from "./game/gameRenderer.class";
import { sleep } from "./utils/sleep";
import { InputManager } from "./input/inputManager.class";
import { SnakeDirectionQueue } from "./snake/snakeDirectionQueue.class";
import { FruitManager } from "./fruit/fruitManager.class";
import { SnakeCollision } from "./snake/snakeCollisionManager.class";
import { FRAME_TIME, WINDOW_HEIGHT, WINDOW_WIDTH } from "./utils/consts";
import { ScoreManager } from "./score/scoreManager.class";
import * as process from "process";
import { printGameOver } from "./utils/ascii";
import { CommandService } from "./commands/commandService.class";
import { helpCommand } from "./commands/functions/help.command";
import { TokenManager } from "./auth/tokenManager.class";
import { AuthService } from "./auth/authService.class";
import { registerCommand } from "./commands/functions/register.command";
import { loginCommand } from "./commands/functions/login.command";
import { leaderboardCommand } from "./commands/functions/leaderboard.command";
import { LeaderboardService } from "./leaderboard/leaderboardService.class";
import { importCommand } from "./commands/functions/import.command";

const snakeDirectionQueue = new SnakeDirectionQueue({ x: 1, y: 0 });
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

const commandService = new CommandService();
const tokenManager = new TokenManager();
const authService = new AuthService(tokenManager);
const leaderboardService = new LeaderboardService(tokenManager);

commandService.addCommand(helpCommand());
commandService.addCommand(
  leaderboardCommand(authService, leaderboardService, tokenManager),
);
commandService.addCommand(loginCommand(authService));
commandService.addCommand(registerCommand(authService));
commandService.addCommand(importCommand(scoreManager, leaderboardService));
commandService.addCommand({
  name: "logout",
  exec: () => console.log("logout"),
});

async function main() {
  if (process.argv.length > 2) {
    const commandName = process.argv[2];
    await commandService.execCommand(commandName);
    process.exit();
  }

  inputManager.read();
  while (!gameManager.shouldGameOver()) {
    collisionManager.checkCollision();
    if (gameManager.shouldGameOver()) break;

    gameRenderer.render();
    await sleep(FRAME_TIME - scoreManager.score * 2);

    snake.move();
  }
  console.clear();
  if (scoreManager.shouldSave()) {
    scoreManager.saveScore();
    await importCommand(scoreManager, leaderboardService).exec();
  }
  printGameOver();
  console.log("Highest score: ", scoreManager.getSavedScore());
  console.log("Your Score: ", scoreManager.score);
  process.exit();
}

main();
