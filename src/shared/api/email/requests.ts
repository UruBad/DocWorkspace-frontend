import { instance } from "./instance";
import type { AxiosPromise } from "axios";
import type { IBaseItem } from "./types";
import type { IStringIdx } from "@/shared/lib/types/object";
import { setUpdatedAtTo } from "@/shared/lib/utils/date";

type TResponse<T> = AxiosPromise<T & IBaseItem>;

interface ISendData extends IStringIdx, IBaseItem {}

export function send<T extends ISendData>(url: string, data: T): TResponse<T> {
  setUpdatedAtTo(data);
  return instance.put(`/${url}`, data);
}
