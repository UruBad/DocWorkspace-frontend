import { instance, refreshTokenInstance } from "./instance";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { IBaseItem, IUpdateData, TId } from "./types";
import type { IStringIdx } from "@/shared/lib/types/object";

type TResponse<T> = AxiosResponse<T & IBaseItem>;
type TResponseGetAll<T> = AxiosResponse<T[]>;

export function getAll<T>(
  url: string,
  params?: IStringIdx
): Promise<TResponseGetAll<T>> {
  return instance.get(`/${url}`, { params } as AxiosRequestConfig);
}

export function getById<T>(url: string, id: TId): Promise<TResponse<T>> {
  return instance.get(`/${url}/${id}`);
}

export function get<T>(url: string): Promise<TResponse<T>> {
  return instance.get<T>(url);
}

export function post<T extends IStringIdx>(
  url: string,
  data: object
): Promise<TResponse<T>> {
  return instance.post<T>(`/${url}`, data);
}

export function put<T extends IUpdateData>(
  url: string,
  id: TId,
  data: object
): Promise<TResponse<T>> {
  return instance.put<T>(`/${url}/${id}`, data);
}

export function remove<T>(url: string, id: TId): Promise<TResponse<T>> {
  return instance.delete<T>(`/${url}/${id}`);
}

export function patch<T>(
  url: string,
  id: TId,
  data: object
): Promise<TResponse<T>> {
  return instance.patch<T>(`/${url}/${id}`, data);
}

export function refresh<T extends IStringIdx>(
  url: string
): Promise<TResponse<T>> {
  return refreshTokenInstance.post<T>(`/${url}`);
}
