import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@/shared/lib/browser";
import {
  REFRESH_TOKEN_KEY,
  TOKEN_EXPIRES_IN,
  TOKEN_KEY,
} from "@/shared/config";
import { api } from "../api";
import { useAlertsStore } from "@/shared/ui/TheAlerts";
import useTimeout from "@/shared/lib/use/useTimeout";
import type { ISessionUser, ITokens } from "./types";
import { EGender, ERole } from "@/entities/User/model/types";

const namespaced = "session";

const defaultUserName = "Anonymous";

export const useSessionStore = defineStore(namespaced, () => {
  const { showError } = useAlertsStore();

  const { value: tokenValue, setLSValue: setLSToken } = useLocalStorage(
    TOKEN_KEY,
    ""
  );

  const token = ref(tokenValue);

  function setToken(value: string) {
    token.value = value;
    setLSToken(value, false);
  }

  function removeToken() {
    setToken("");
  }

  const { value: refreshTokenValue, setLSValue: setLSRefreshToken } =
    useLocalStorage(REFRESH_TOKEN_KEY, "");

  const refreshToken = ref(refreshTokenValue);

  function setRefreshToken(value: string) {
    refreshToken.value = value;
    setLSRefreshToken(value, false);
  }

  function removeRefreshToken() {
    setRefreshToken("");
  }

  const {
    setTimeoutId: setTimeoutGetToken,
    clearTimeoutId: clearTimeoutGetToken,
  } = useTimeout(getToken, TOKEN_EXPIRES_IN);

  async function getToken() {
    try {
      const result = await api.getToken();
      if (result) {
        const { data } = result;
        setToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        setTimeoutGetToken();
      }
    } catch (e: unknown) {
      if (e instanceof Error) showError(e.message);
    }
  }

  function setTokens(data: ITokens) {
    clearTimeoutGetToken();
    setToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    setTimeoutGetToken();
  }

  const user = reactive<ISessionUser>({
    aptitudes: [],
    problems: [],
    services: [],
    id: 0,
    username: defaultUserName,
    role: ERole.PATIENT,
    gender: EGender.MALE,
    avatar: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastname: "",
    firstname: "",
  });

  const isAuth = computed(() => Boolean(token.value));

  function setUser(data: ISessionUser) {
    user.id = data.id;
    user.avatar = data.avatar;
    user.createdAt = data.createdAt;
    user.firstname = data.firstname;
    user.gender = data.gender;
    user.lastname = data.lastname;
    user.role = data.role;
    user.updatedAt = data.updatedAt;
    user.username = data.username;
  }

  function logout() {
    clearTimeoutGetToken();
    removeToken();
    removeRefreshToken();

    setUser({
      aptitudes: [],
      problems: [],
      services: [],
      id: 0,
      username: defaultUserName,
      gender: EGender.MALE,
      avatar: "",
      role: ERole.PATIENT,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastname: "",
      firstname: "",
    });
  }

  return {
    token,
    setTokens,
    refreshToken,
    user,
    setUser,
    isAuth,
    logout,
  };
});
