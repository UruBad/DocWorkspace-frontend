import { string } from "yup";

export const validator = {
  username: () => string().required().min(3).max(50),
  lastname: () => string().required().min(3).max(50),
  firstname: () => string().required().min(3).max(50),
} as const;
