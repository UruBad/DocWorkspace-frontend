import { createApiErrorGetById, BackendApi } from "@/shared/api";
import type { IUser } from "../model/types";

const PROFILE_URL = "profile";

const profile_name = "profile";

const errors = {
  getProfile: createApiErrorGetById(profile_name),
} as const;

export const api = {
  getProfile,
} as const;

async function getProfile() {
  try {
    return await BackendApi.get<IUser>(PROFILE_URL);
  } catch {
    throw new Error(errors.getProfile);
  }
}
