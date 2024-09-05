import { reactive } from "vue";
import {
  refreshArray,
  spliceBy,
  spliceSimpleBy,
  type IObject,
  type TValue,
} from "@/shared/lib/utils/array";

interface IUseReactiveArray<T> {
  array: T[];
  add: (item: T) => void;
  remove: (value: TValue, key?: string) => void;
  refresh: (data: T[]) => void;
}

// TODO доделать типизацию
export function useReactiveArray<T>(init: T[] = []): IUseReactiveArray<T> {
  const array = reactive(init) as T[];

  function add(item: T) {
    array.push(item);
  }

  function remove(value: TValue, key: string = "id") {
    if (key === "id") {
      return spliceBy(value, array as IObject[]);
    }
    if (!key) {
      return spliceSimpleBy(value, array as TValue[]);
    }
  }

  function refresh(data: T[]) {
    refreshArray(array, data);
  }

  return {
    array,
    add,
    remove,
    refresh,
  };
}
