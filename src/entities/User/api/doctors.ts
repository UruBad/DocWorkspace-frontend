import {
  BackendApi,
  createApiErrorCreate,
  createApiErrorDelete,
  createApiErrorGetAll,
  createApiErrorGetById,
  createApiErrorPatch,
  createApiErrorUpdate,
} from "@/shared/api";
import type { IUser } from "../model/types";

const DOCTORS_URL = "doctors";

const doctors_name = "doctor";

const errors = {
  getById: createApiErrorGetById(doctors_name),
  getAll: createApiErrorGetAll(doctors_name),
  create: createApiErrorCreate(doctors_name),
  update: createApiErrorUpdate(doctors_name),
  destroy: createApiErrorDelete(doctors_name),
  revert: createApiErrorPatch(doctors_name),
} as const;

export const api = {
  getAll,
  getById,
  create,
  update,
  destroy,
  revert,
} as const;

async function getAll() {
  try {
    return await BackendApi.getAll<IUser>(DOCTORS_URL, {});
  } catch {
    throw new Error(errors.getAll);
  }
}

async function getById(id: number) {
  try {
    return await BackendApi.getById<IUser>(DOCTORS_URL, id);
  } catch {
    throw new Error(errors.getById);
  }
}

async function create(data: IUser) {
  try {
    return await BackendApi.post(DOCTORS_URL, data);
  } catch {
    throw new Error(errors.create);
  }
}

async function update(id: number, data: IUser) {
  try {
    return await BackendApi.put(DOCTORS_URL, id, data);
  } catch {
    throw new Error(errors.update);
  }
}

async function destroy(id: number) {
  try {
    return await BackendApi.remove(DOCTORS_URL, id);
  } catch {
    throw new Error(errors.destroy);
  }
}

async function revert(id: number) {
  try {
    return await BackendApi.patch(DOCTORS_URL, id, { deleted: false });
  } catch {
    throw new Error(errors.destroy);
  }
}
