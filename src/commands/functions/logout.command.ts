import { AuthService } from "../../auth/authService.class";

export function logoutCommand(authService: AuthService) {
  return {
    name: "logout",
    exec: async () => {
      authService.logout();
    },
  };
}
