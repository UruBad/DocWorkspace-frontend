export interface IAuthData {
  username: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
}
