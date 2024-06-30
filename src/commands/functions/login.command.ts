import { AuthService } from "../../auth/authService.class";
import { prompt } from "enquirer";

export function loginCommand(authService: AuthService) {
  return {
    name: "login",
    exec: async () => {
      const credentials: { username: string; password: string } = await prompt([
        {
          type: "input",
          name: "username",
          message: "Enter username: ",
        },
        {
          type: "password",
          name: "password",
          message: "Enter password: ",
        },
      ]);

      if (credentials.username && credentials.password) {
        await authService.login(credentials.username, credentials.password);
      } else {
        console.log("Invalid username or password");
      }
    },
  };
}
