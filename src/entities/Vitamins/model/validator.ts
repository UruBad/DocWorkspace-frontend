import { boolean, string } from "yup";

export const validator = {
  name: string().required("Введите название").min(3).max(50),
  description: string(),
  link: string().required("Введите ссылку").min(3).max(256),
  image: string().required("Введите изображение").min(3).max(256),
  deleted: boolean(),
} as const;
