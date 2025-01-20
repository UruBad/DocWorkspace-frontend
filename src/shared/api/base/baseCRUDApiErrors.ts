import type { IBaseCRUDApiErrors } from "./types";
import { createBaseReadApiErrors } from "@/shared/api";

export function createBaseCRUDApiErrors(name: string): IBaseCRUDApiErrors {
  return {
    ...createBaseReadApiErrors(name),
    create: createApiErrorCreate(name),
    update: createApiErrorUpdate(name),
    destroy: createApiErrorDelete(name),
    patch: createApiErrorPatch(name),
  };
}

export function createApiErrorCreate(name: string) {
  return `Failed to create ${name}`;
}

export function createApiErrorUpdate(name: string) {
  return `Failed to update ${name}`;
}

export function createApiErrorDelete(name: string) {
  return `Failed to delete ${name}`;
}

export function createApiErrorPatch(name: string) {
  return `Failed to patch ${name}`;
}
