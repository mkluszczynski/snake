import { printSnake } from "../utils/ascii";

export function help() {
  printSnake();
  console.log("Controls: ");
  console.log("Arrow keys - Move the snake");
  console.log("q - Quit the game");
  console.log("--------------------");
  console.log("Command list: ");
  console.log("help - Show this help message");
}
