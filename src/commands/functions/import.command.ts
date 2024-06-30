import { ScoreManager } from "../../score/scoreManager.class";
import { LeaderboardService } from "../../leaderboard/leaderboardService.class";

export function importCommand(
  scoreManager: ScoreManager,
  leaderboardService: LeaderboardService,
) {
  return {
    name: "import",
    exec: async () => {
      const localScore = scoreManager.getSavedScore();

      if (!localScore) {
        console.log("No saved score found!");
        return;
      }

      const res = await leaderboardService.saveScore(localScore);
    },
  };
}
