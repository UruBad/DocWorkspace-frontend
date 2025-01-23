import type { IBaseItem } from "@/shared/api/backend";

export interface IVitamin extends IBaseItem {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  deleted: boolean;
}
