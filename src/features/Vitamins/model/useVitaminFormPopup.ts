import { VitaminsModel } from "@/entities/Vitamins";
import { useIsBoolean } from "@/shared/lib/use/base/useIsBoolean";
import { defineStore } from "pinia";
import { reactive } from "vue";

const NAMESPACE = "vitamin-form-popup";

export const useVitaminFormPopup = defineStore(NAMESPACE, () => {
  const vitamin = reactive(VitaminsModel.DEFAULT_VITAMIN);
  const { getAll } = VitaminsModel.useVitaminsStore();

  const { isBoolean: visible, setTrue: open, setFalse } = useIsBoolean(false);

  const show = (
    item: VitaminsModel.IVitamin = VitaminsModel.DEFAULT_VITAMIN
  ) => {
    vitamin.id = item.id;
    vitamin.name = item.name;
    vitamin.description = item.description;
    vitamin.image = item.image;
    vitamin.link = item.link;
    vitamin.deleted = item.deleted;

    open();
  };

  const close = () => {
    setFalse();
    getAll();
  };

  return { vitamin, visible, close, show };
});
