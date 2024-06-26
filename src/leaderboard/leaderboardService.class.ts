import { TokenManager } from "../auth/tokenManager.class";
import { API_URL } from "../utils/consts";
import axios from "axios";
import { Score } from "./dto/score.dto";

export class LeaderboardService {
  constructor(private readonly tokenManager: TokenManager) {}

  public async getLeaderboard() {
    const take = 10;
    const skip = 0;
    const res = await axios.get<Score[]>(
      `${API_URL}/scores?take=${take}&skip=${skip}`,
      {
        headers: { Authorization: `Bearer ${this.tokenManager.getToken()}` },
      },
    );

    if (res.status !== 200) {
      console.log("Failed to get leaderboard: ", res.data);
      return;
    }

    return res.data;
  }
}
