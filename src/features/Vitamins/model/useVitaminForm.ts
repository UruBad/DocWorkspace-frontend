import { VitaminsModel } from "@/entities/Vitamins";

export function useVitaminForm() {
  const { create, update } = VitaminsModel.useVitaminsStore();

  return {
    create,
    update,
  };
}
