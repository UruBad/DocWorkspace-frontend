import type { VitaminsModel } from "@/entities/Vitamins";

export enum EAppointment {
  BREAKFAST = "breakfast",
  LUNCH = "lunch",
  DINNER = "dinner",
}

export interface IPrescription {
  id: number;
  appointment: EAppointment;
  count: number;
  type: string;
  vitamin: VitaminsModel.IVitamin;
  deleted: boolean;
}
