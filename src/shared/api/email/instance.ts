import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import {
  FEEDBACK_API_KEY,
  APP_NAME,
  TOKEN_KEY,
  FEEDBACK_API_URL,
  FEEDBACK_SECURE_TOKEN_API_URL,
  FEEDBACK_ACCOUNTS_API_URL,
} from "@/shared/config";

export const instance = axios.create({
  baseURL: FEEDBACK_API_URL,
});

instance.interceptors.request.use(addToken, reject);

export const accountInstance = axios.create({
  baseURL: FEEDBACK_ACCOUNTS_API_URL,
});

accountInstance.interceptors.request.use(addAPIKey, reject);

export const secureTokenInstance = axios.create({
  baseURL: FEEDBACK_SECURE_TOKEN_API_URL,
});

secureTokenInstance.interceptors.request.use(addAPIKey, reject);

function addToken(config: InternalAxiosRequestConfig) {
  if (!config.params) {
    config.params = {};
  }
  config.params.auth = localStorage.getItem(`${APP_NAME}:${TOKEN_KEY}`);

  return config;
}

function addAPIKey(config: InternalAxiosRequestConfig) {
  if (!config.params) {
    config.params = {};
  }
  config.params.key = FEEDBACK_API_KEY;

  return config;
}

function reject(error: any) {
  return Promise.reject(error);
}
