import { SessionModel } from "@/entities/Session";
import { ProfileApi } from "@/entities/User";

export function useAuth() {
  const session = SessionModel.useSessionStore();

  async function loadSessionUser() {
    const { data } = await ProfileApi.getProfile();
    session.setUser({ ...data });
  }

  return {
    loadSessionUser,
  };
}
