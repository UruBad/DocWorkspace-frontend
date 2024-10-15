import { APP_NAME } from "@/shared/config";

interface IUseLocalStorage<T> {
  value: T;
  setLSValue: (value: T, isJson?: boolean) => void;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): IUseLocalStorage<T> {
  const keyLS = `${APP_NAME}:${key}`;

  function isJsonString(value: string) {
    try {
      JSON.parse(value);
    } catch {
      return false;
    }
    return true;
  }

  const valueLS = window.localStorage.getItem(keyLS);
  const value: T = valueLS
    ? isJsonString(valueLS)
      ? JSON.parse(valueLS)
      : valueLS
    : initialValue;

  function setLSValue(value: T, isJson: boolean = true): void {
    window.localStorage.setItem(
      keyLS,
      isJson ? JSON.stringify(value) : `${value}`
    );
  }

  return { value, setLSValue };
}
