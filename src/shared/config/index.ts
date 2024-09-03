export const APP_NAME = getEnvVar("VITE_APP_NAME");
const APP_PROD_BASE_URL = getEnvVar("VITE_APP_PROD_BASE_URL");

export const API_URL = getEnvVar("VITE_APP_API_URL");

export const DJ_API_URL = getEnvVar("VITE_APP_DJ_API_URL");

export const FB_API_KEY = getEnvVar("VITE_APP_FB_API_KEY");
export const FB_API_URL = getEnvVar("VITE_APP_FB_API_URL");
export const FB_ACCOUNTS_API_URL = getEnvVar("VITE_APP_FB_ACCOUNTS_API_URL");
export const FB_SECURE_TOKEN_API_URL = getEnvVar(
  "VITE_APP_FB_SECURE_TOKEN_API_URL"
);

export const TOKEN_KEY = "jwt-token";
export const TOKEN_EXPIRES_IN = 3600 * 1000;
export const REFRESH_TOKEN_KEY = "refresh-token";

export const isDevEnv = getEnvVar("DEV");
export const isProdEnv = getEnvVar("PROD");

export const BASE_URL = isProdEnv
  ? APP_PROD_BASE_URL
  : "http://localhost:5173/";

export const FEEDBACK_API_KEY = getEnvVar("VITE_APP_FB_API_KEY");
export const FEEDBACK_API_URL = getEnvVar("VITE_APP_FB_API_URL");
export const FEEDBACK_ACCOUNTS_API_URL = getEnvVar(
  "VITE_APP_FB_ACCOUNTS_API_URL"
);
export const FEEDBACK_SECURE_TOKEN_API_URL = getEnvVar(
  "VITE_APP_FB_SECURE_TOKEN_API_URL"
);

export const EMAIL_ACCESS_TOKEN = getEnvVar("VITE_APP_MAIL_ACCESS_TOKEN");
export const MAIL_REFRESH_TOKEN = getEnvVar("VITE_APP_MAIL_REFRESH_TOKEN");

export const TELEGRAM_API_URL = getEnvVar("VITE_APP_TELEGRAM_API_URL");
export const TELEGRAM_ACCESS_TOKEN = getEnvVar(
  "VITE_APP_TELEGRAM_ACCESS_TOKEN"
);

export const TELEGRAM_CHAT_ID = getEnvVar("VITE_APP_TELEGRAM_CHAT_ID");

function getEnvVar(key: string) {
  const envVar = import.meta.env[key];
  if (envVar === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return envVar;
}
