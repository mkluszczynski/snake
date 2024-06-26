import { AuthService } from "../../auth/authService.class";
import { prompt } from "enquirer";

export function registerCommand(authService: AuthService) {
  return {
    name: "register",
    description: "Register a new user",
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
        try {
          await authService.register(
            credentials.username,
            credentials.password,
          );
        } catch (e) {
          console.log("Error registering user", e);
        }
      } else {
        console.log("Invalid username or password");
      }
    },
  };
}
