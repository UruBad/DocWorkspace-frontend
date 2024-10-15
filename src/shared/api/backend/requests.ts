import { instance, refreshTokenInstance } from "./instance";
import type { AxiosPromise } from "axios";
import type { TId, IBaseItem, IUpdateData } from "./types";
import type { IStringIdx } from "@/shared/lib/types/object";

type TResponse<T> = AxiosPromise<T & IBaseItem>;
type TResponseGetAll<T> = AxiosPromise<T[]>;

export function getAll<T>(
  url: string,
  params?: IStringIdx
): TResponseGetAll<T> {
  return instance.get(`/${url}`, { params });
}

export function getById<T>(url: string, id: TId): TResponse<T> {
  return instance.get(`/${url}/${id}`);
}

export function get<T>(url: string): TResponse<T> {
  return instance.get(url);
}

export function post<T extends IStringIdx>(
  url: string,
  data: object
): TResponse<T> {
  return instance.post<T>(`/${url}`, data);
}

export function put<T extends IUpdateData>(
  url: string,
  id: TId,
  data: object
): TResponse<T> {
  return instance.put(`/${url}/${id}`, data);
}

export function remove(url: string, id: TId) {
  return instance.delete(`/${url}/${id}`);
}

export function refresh<T extends IStringIdx>(url: string): TResponse<T> {
  return refreshTokenInstance.post<T>(`/${url}`);
}
