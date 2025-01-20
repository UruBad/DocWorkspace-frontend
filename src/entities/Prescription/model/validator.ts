import { boolean, string } from "yup";

export const validator = {
  breakfast: string().min(3).max(50),
  lunch: string().min(3).max(256),
  dinner: string().min(3).max(256),
  deleted: boolean(),
} as const;
