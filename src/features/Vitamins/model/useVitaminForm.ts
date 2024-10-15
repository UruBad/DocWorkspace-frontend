import { VitaminsModel } from "@/entities/Vitamins";

export function useVitaminForm() {
  const { getAll, create } = VitaminsModel.useVitaminsStore();

  return {
    getAll,
    create,
  };
}
