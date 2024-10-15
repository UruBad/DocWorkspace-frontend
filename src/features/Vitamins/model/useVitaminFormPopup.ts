import { VitaminsModel } from "@/entities/Vitamins";
import { useIsBoolean } from "@/shared/lib/use/base/useIsBoolean";
import { defineStore } from "pinia";
import { reactive } from "vue";

const NAMESPACE = "vitamin-form-popup";

export const useVitaminFormPopup = defineStore(NAMESPACE, () => {
  const vitamin = reactive(VitaminsModel.DEFAULT_VITAMIN);

  const {
    isBoolean: visible,
    setTrue: open,
    setFalse: close,
  } = useIsBoolean(false);

  function show(item: VitaminsModel.IVitamin = VitaminsModel.DEFAULT_VITAMIN) {
    vitamin.id = item.id;
    vitamin.name = item.name;
    vitamin.description = item.description;
    vitamin.image = item.image;
    vitamin.link = item.link;
    vitamin.deleted = item.deleted;

    open();
  }

  return { vitamin, visible, close, show };
});
