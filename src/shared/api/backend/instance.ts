import axios, { type InternalAxiosRequestConfig } from 'axios';
import { API_URL, APP_NAME, TOKEN_KEY } from '@/shared/config';

export const instance = axios.create({
  baseURL: API_URL
})

instance.interceptors.request.use(addToken, reject)

function addToken(config: InternalAxiosRequestConfig) {
  if (!config.params) {
    config.params = {}
  }
  config.params.auth = localStorage.getItem(`${APP_NAME}:${TOKEN_KEY}`)

  return config
}

function reject(error: any) {
  return Promise.reject(error)
}
