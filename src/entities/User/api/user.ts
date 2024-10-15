import {
  createApiErrorGetById,
  createApiErrorGetAll,
  createApiErrorCreate,
  createApiErrorUpdate,
  createApiErrorDelete,
  BackendApi,
} from "@/shared/api";
import type { IUser } from "../model/types";

const USER_URL = "users";

const users_name = "user";

const errors = {
  getById: createApiErrorGetById(users_name),
  getAll: createApiErrorGetAll(users_name),
  create: createApiErrorCreate(users_name),
  update: createApiErrorUpdate(users_name),
  destroy: createApiErrorDelete(users_name),
} as const;

export const api = {
  getAll,
  getById,
  create,
  update,
  destroy,
} as const;

async function getAll() {
  try {
    return await BackendApi.getAll<IUser>(USER_URL, {});
  } catch {
    throw new Error(errors.getAll);
  }
}

async function getById(id: number) {
  try {
    return await BackendApi.getById<IUser>(USER_URL, id);
  } catch {
    throw new Error(errors.getById);
  }
}

async function create(data: IUser) {
  try {
    return await BackendApi.post(USER_URL, data);
  } catch {
    throw new Error(errors.create);
  }
}

async function update(id: number, data: IUser) {
  try {
    return await BackendApi.put(USER_URL, id, data);
  } catch {
    throw new Error(errors.update);
  }
}

async function destroy(id: number) {
  try {
    return await BackendApi.remove(USER_URL, id);
  } catch {
    throw new Error(errors.destroy);
  }
}
