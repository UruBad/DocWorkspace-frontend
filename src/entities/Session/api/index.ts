import { BackendApi } from "@/shared/api";
import { AxiosError } from "axios";
import { getErrorMessageBy } from "./errors";
import type { IAuthData, IAuthResponse, ITokenResponse } from "./types";

const AUTH_URL = "auth";
export const api = {
  singIn,
  singOut,
  getToken,
};

async function singIn(data: IAuthData) {
  try {
    return await BackendApi.post<IAuthResponse>(`${AUTH_URL}/login`, data);
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw new Error(getErrorMessageBy(e.response?.data.error.message));
    }
  }
}

async function singOut() {
  try {
    return await BackendApi.post(`${AUTH_URL}/logoff`, {});
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw new Error(getErrorMessageBy(e.response?.data.error.message));
    }
  }
}

async function getToken() {
  try {
    return await BackendApi.refresh<ITokenResponse>(`${AUTH_URL}/refresh`);
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw new Error(getErrorMessageBy(e.response?.data.error.message));
    }
  }
}
