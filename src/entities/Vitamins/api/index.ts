import {
  createApiErrorGetById,
  createApiErrorGetAll,
  createApiErrorCreate,
  createApiErrorUpdate,
  createApiErrorDelete,
  BackendApi,
} from "@/shared/api";
import type { IVitamin } from "../model/types";

const VITAMINS_URL = "vitamins";

const vitamins_name = "vitamins";

const errors = {
  getById: createApiErrorGetById(vitamins_name),
  getAll: createApiErrorGetAll(vitamins_name),
  create: createApiErrorCreate(vitamins_name),
  update: createApiErrorUpdate(vitamins_name),
  destroy: createApiErrorDelete(vitamins_name),
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
    return await BackendApi.getAll<IVitamin>(VITAMINS_URL, {});
  } catch {
    throw new Error(errors.getAll);
  }
}

async function getById(id: number) {
  try {
    return await BackendApi.getById<IVitamin>(VITAMINS_URL, id);
  } catch {
    throw new Error(errors.getById);
  }
}

async function create(data: IVitamin) {
  try {
    return await BackendApi.post<IVitamin>(VITAMINS_URL, data);
  } catch {
    throw new Error(errors.create);
  }
}

async function update(id: number, data: IVitamin) {
  try {
    return await BackendApi.put<IVitamin>(VITAMINS_URL, id, data);
  } catch {
    throw new Error(errors.update);
  }
}

async function destroy(id: number) {
  try {
    return await BackendApi.remove(VITAMINS_URL, id);
  } catch {
    throw new Error(errors.destroy);
  }
}
