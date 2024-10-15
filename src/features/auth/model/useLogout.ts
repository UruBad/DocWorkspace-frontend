import { SessionModel } from "@/entities/Session";

export function useLogout() {
  const { logout: resetSession } = SessionModel.useSessionStore();

  function logout() {
    resetSession();
  }

  return {
    logout,
  };
}
