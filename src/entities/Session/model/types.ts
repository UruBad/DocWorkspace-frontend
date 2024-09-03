import type { UserModel } from "@/entities/User";

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface ISessionUser extends UserModel.IUser {
  createdAt?: number;
  updatedAt?: number;
}
