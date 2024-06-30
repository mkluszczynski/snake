import { TokenManager } from "../auth/tokenManager.class";
import { API_URL } from "../utils/consts";
import axios from "axios";
import { Score } from "./dto/score.dto";

export class LeaderboardService {
  constructor(private readonly tokenManager: TokenManager) {}

  public async getScores(numberToGet: number): Promise<Score[] | undefined> {
    const take = numberToGet;
    const skip = 0;
    const res = await axios.get<Score[]>(
      `${API_URL}/scores?take=${take}&skip=${skip}`,
      {
        validateStatus: () => true,
        headers: { Authorization: `Bearer ${this.tokenManager.getToken()}` },
      },
    );

    if (res.status !== 200) {
      console.log("Failed to get leaderboard: ", res.data);
      return;
    }

    return res.data;
  }

  public async getUserScore(userId: number): Promise<Score | undefined> {
    const res = await axios.get<Score>(`${API_URL}/users/${userId}/score`, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${this.tokenManager.getToken()}`,
      },
    });

    if (res.status !== 200) {
      console.log("Failed to get user score: ", res.data);
      return;
    }

    return res.data;
  }

  public async saveScore(score: number): Promise<void> {
    const res = await axios.post(
      `${API_URL}/scores`,
      { value: score },
      {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${this.tokenManager.getToken()}`,
        },
      },
    );

    if (res.status !== 201) {
      console.log("Failed to save score: ", res.data);
      return;
    }
    console.log("Score saved!");
  }
}
