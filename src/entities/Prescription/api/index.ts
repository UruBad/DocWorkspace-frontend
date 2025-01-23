import {
  BackendApi,
  createApiErrorCreate,
  createApiErrorDelete,
  createApiErrorGetAll,
  createApiErrorGetById,
  createApiErrorPatch,
  createApiErrorUpdate,
} from "@/shared/api";
import type { IPrescription } from "../model/types";

const PRESCRIPTIONS_URL = "prescriptions";

const prescriptions_name = "prescriptions";

const errors = {
  getById: createApiErrorGetById(prescriptions_name),
  getAll: createApiErrorGetAll(prescriptions_name),
  create: createApiErrorCreate(prescriptions_name),
  update: createApiErrorUpdate(prescriptions_name),
  destroy: createApiErrorDelete(prescriptions_name),
  revert: createApiErrorPatch(prescriptions_name),
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
    return await BackendApi.getAll<IPrescription>(PRESCRIPTIONS_URL, {});
  } catch {
    throw new Error(errors.getAll);
  }
}

async function getById(id: number) {
  try {
    return await BackendApi.getById<IPrescription>(PRESCRIPTIONS_URL, id);
  } catch {
    throw new Error(errors.getById);
  }
}

async function create(data: IPrescription) {
  try {
    return await BackendApi.post<IPrescription>(PRESCRIPTIONS_URL, data);
  } catch {
    throw new Error(errors.create);
  }
}

async function update(id: number, data: IPrescription) {
  try {
    return await BackendApi.put<IPrescription>(PRESCRIPTIONS_URL, id, data);
  } catch {
    throw new Error(errors.update);
  }
}

async function destroy(id: number) {
  try {
    return await BackendApi.remove<IPrescription>(PRESCRIPTIONS_URL, id);
  } catch {
    throw new Error(errors.destroy);
  }
}

async function revert(id: number) {
  try {
    return await BackendApi.patch<IPrescription>(PRESCRIPTIONS_URL, id, {
      deleted: false,
    });
  } catch {
    throw new Error(errors.destroy);
  }
}
