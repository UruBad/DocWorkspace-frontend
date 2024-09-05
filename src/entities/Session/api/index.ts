import { BackendApi } from "@/shared/api";
import { AxiosError, type AxiosPromise } from "axios";
import { getErrorMessageBy } from "./errors";
import type { IAuthData, IAuthResponse, ITokenResponse } from "./types";

const AUTH_URL = "auth";
export const api = {
  singIn,
  singOut,
  getToken,
};

async function singIn(data: IAuthData): AxiosPromise<IAuthResponse> {
  try {
    return await BackendApi.post(`${AUTH_URL}/login`, data);
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw new Error(getErrorMessageBy(e.response?.data.error.message));
    }
  }
}

async function singOut(): AxiosPromise<IAuthResponse> {
  try {
    return await BackendApi.post(`${AUTH_URL}/logoff`, {});
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw new Error(getErrorMessageBy(e.response?.data.error.message));
    }
  }
}

async function getToken(refreshToken: string): AxiosPromise<ITokenResponse> {
  try {
    return await BackendApi.post(`${AUTH_URL}/refresh`, {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw new Error(getErrorMessageBy(e.response?.data.error.message));
    }
  }
}
