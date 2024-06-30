import { printLeaderboard } from "../../utils/ascii";
import { LeaderboardService } from "../../leaderboard/leaderboardService.class";
import { TokenManager } from "../../auth/tokenManager.class";
import { AuthService } from "../../auth/authService.class";

export function leaderboardCommand(
  authService: AuthService,
  leaderboardService: LeaderboardService,
  tokenManager: TokenManager,
) {
  return {
    name: "leaderboard",
    exec: async () => {
      const leaderboard = await leaderboardService.getScores(25);

      if (!leaderboard) {
        console.log("Failed to get leaderboard");
        return;
      }

      printLeaderboard();
      console.log("TOP 25 PLAYERS");
      console.log("Rank   |   Username   |   Score");
      leaderboard.forEach((score, index) => {
        console.log(
          `${index + 1}   |   ${score.user.username}   |   ${score.value}`,
        );
      });

      if (tokenManager.doesTokenExist()) {
        const userData = await authService.getLoggedUserData();
        if (userData) {
          const userScore = await leaderboardService.getUserScore(userData.id);
          console.log("Your score: ", userScore?.value);
        }
      }
    },
  };
}
