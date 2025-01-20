import { VitaminsModel } from "@/entities/Vitamins";
import { defineStore } from "pinia";

const NAMESPACE = "vitamins-table";

export const useVitaminsTable = defineStore(NAMESPACE, () => {
  const { vitamins, getAll, destroy, revert } =
    VitaminsModel.useVitaminsStore();

  return { vitamins, getAll, destroy, revert };
});
