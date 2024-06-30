import axios from "axios";
import { API_URL } from "../utils/consts";
import { TokenManager } from "./tokenManager.class";
import { apiKeyDto } from "./dto/apiKey.dto";

export class AuthService {
  constructor(private readonly tokenManager: TokenManager) {}

  public async register(username: string, password: string) {
    const res = await axios.post(
      `${API_URL}/users`,
      {
        username,
        password,
      },
      { validateStatus: () => true },
    );

    if (res.status === 201) {
      console.log("Register success");
    }
    if (res.status === 400) {
      console.log("Username already exists");
    }
  }

  public async login(username: string, password: string) {
    const res = await axios.post<apiKeyDto>(
      `${API_URL}/auth/login`,
      {
        username,
        password,
      },
      { validateStatus: () => true },
    );

    if (res.status !== 201) {
      console.log("Login failed!");
      return;
    }

    if (res.data.apiKey === undefined) {
      console.log("Login failed: apiKey not found in response.");
      return;
    }

    this.tokenManager.saveToken(res.data.apiKey);
    console.log("Login success");
  }

  logout() {
    this.tokenManager.deleteToken();
    console.log("Logout success");
  }
}
