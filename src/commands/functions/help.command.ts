export function helpCommand() {
  return {
    name: "help",
    exec: () => {
      console.log(`
  Controls: 
  - Use arrow keys to move the snake
  - Press 'q' to quit the game
  
  Commands:
  - leaderboard: Show the leaderboard
  - login: Login to leaderboard 
  - register: Register new account to leaderboard 
  - import: Import your score saved on leaderboard
  - logout: Logout from leaderboard
  - help: Show this message
  `);
    },
  };
}
