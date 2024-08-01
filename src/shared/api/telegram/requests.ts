import { messageInstance } from "./instance";
import type { AxiosPromise } from "axios";
import type { IBaseItem } from "./types";

type TResponse<T> = AxiosPromise<T & IBaseItem>;

export function sendMessage<T>(message: string): TResponse<T> {
  return messageInstance.get(message);
}
