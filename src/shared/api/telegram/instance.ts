import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import {
  FB_API_URL,
  APP_NAME,
  TOKEN_KEY,
  FB_ACCOUNTS_API_URL,
  FB_SECURE_TOKEN_API_URL,
  FB_API_KEY,
  TELEGRAM_API_URL,
  TELEGRAM_ACCESS_TOKEN,
  TELEGRAM_CHAT_ID,
} from "@/shared/config";

export const instance = axios.create({
  baseURL: TELEGRAM_API_URL,
});

instance.interceptors.request.use(addToken, reject);

export const messageInstance = axios.create({
  baseURL: `${TELEGRAM_API_URL}/bot${TELEGRAM_ACCESS_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=`,
});

instance.interceptors.request.use(addToken, reject);

function addToken(config: InternalAxiosRequestConfig) {
  if (!config.params) {
    config.params = {};
  }

  // config.params.auth = localStorage.getItem(`${APP_NAME}:${TOKEN_KEY}`);

  return config;
}

function reject(error: any) {
  return Promise.reject(error);
}
