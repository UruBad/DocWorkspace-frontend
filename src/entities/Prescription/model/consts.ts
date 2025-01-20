import { EAppointment, type IPrescription } from "./types";
import { VitaminsModel } from "@/entities/Vitamins";

export const DEFAULT_PRESCRIPTION: IPrescription = {
  appointment: EAppointment.BREAKFAST,
  count: 0,
  type: "",
  vitamin: {} as VitaminsModel.IVitamin,
  id: 0,
  deleted: false,
};
