import axios, { type InternalAxiosRequestConfig } from "axios";
import {
  API_URL,
  APP_NAME,
  REFRESH_TOKEN_KEY,
  TOKEN_KEY,
} from "@/shared/config";

export const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(addToken, reject);

export const refreshTokenInstance = axios.create({
  baseURL: API_URL,
});

refreshTokenInstance.interceptors.request.use(addRefreshToken, reject);

function addToken(config: InternalAxiosRequestConfig) {
  if (!config.params) {
    config.params = {};
  }

  const token = localStorage.getItem(`${APP_NAME}:${TOKEN_KEY}`);

  config.headers.Authorization = `Bearer ${token}`;

  return config;
}

function addRefreshToken(config: InternalAxiosRequestConfig) {
  if (!config.params) {
    config.params = {};
  }

  const token = localStorage.getItem(`${APP_NAME}:${REFRESH_TOKEN_KEY}`);

  config.headers.Authorization = `Bearer ${token}`;

  return config;
}

function reject(error: unknown) {
  return Promise.reject(error);
}
