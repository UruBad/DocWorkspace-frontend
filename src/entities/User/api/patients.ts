import {
  createApiErrorGetById,
  createApiErrorGetAll,
  createApiErrorCreate,
  createApiErrorUpdate,
  createApiErrorDelete,
  BackendApi,
} from "@/shared/api";
import type { IUser } from "../model/types";

const PATIENTS_URL = "patients";

const patients_name = "patients";

const errors = {
  getById: createApiErrorGetById(patients_name),
  getAll: createApiErrorGetAll(patients_name),
  create: createApiErrorCreate(patients_name),
  update: createApiErrorUpdate(patients_name),
  destroy: createApiErrorDelete(patients_name),
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
    return await BackendApi.getAll<IUser>(PATIENTS_URL, {});
  } catch {
    throw new Error(errors.getAll);
  }
}

async function getById(id: number) {
  try {
    return await BackendApi.getById<IUser>(PATIENTS_URL, id);
  } catch {
    throw new Error(errors.getById);
  }
}

async function create(data: IUser) {
  try {
    return await BackendApi.post(PATIENTS_URL, data);
  } catch {
    throw new Error(errors.create);
  }
}

async function update(id: number, data: IUser) {
  try {
    return await BackendApi.put(PATIENTS_URL, id, data);
  } catch {
    throw new Error(errors.update);
  }
}

async function destroy(id: number) {
  try {
    return await BackendApi.remove(PATIENTS_URL, id);
  } catch {
    throw new Error(errors.destroy);
  }
}
