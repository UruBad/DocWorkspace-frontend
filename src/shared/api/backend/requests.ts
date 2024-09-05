import { instance } from "./instance";
import type { AxiosPromise } from "axios";
import type { TId, IBaseItem, IUpdateData } from "./types";
import type { IStringIdx } from "@/shared/lib/types/object";

type TResponse<T> = AxiosPromise<T & IBaseItem>;
type TResponseGetAll<T> = AxiosPromise<IStringIdx<T & IBaseItem>>;

export function getAll<T>(
  url: string,
  params?: IStringIdx
): TResponseGetAll<T> {
  return instance.get(`/${url}`, { params });
}

export function getById<T>(url: string, id: TId): TResponse<T> {
  return instance.get(`/${url}/${id}`);
}

export function post<T extends IStringIdx>(url: string, data: T): TResponse<T> {
  return instance.post<T>(`/${url}`, data);
}

export function put<T extends IUpdateData>(
  url: string,
  id: TId,
  data: T
): TResponse<T> {
  return instance.put(`/${url}/${id}`, data);
}

export function remove(url: string, id: TId) {
  return instance.delete(`/${url}/${id}`);
}
