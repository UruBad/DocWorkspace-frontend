import { defineStore } from "pinia";
import { reactive } from "vue";
import type { IModal, IModalStore } from "./types";
import { useIsBoolean } from "@/shared/lib/use/base/useIsBoolean";

const NAMESPACE = "modal";

export const useModalStore = defineStore(NAMESPACE, (): IModalStore => {
  const modal = reactive<IModal>({
    buttonText: "Хорошо",
  });
  const {
    isBoolean: isVisible,
    setTrue: visible,
    setFalse: hidden,
  } = useIsBoolean(false);

  function showModal(text: string, header?: string, buttonText?: string): void {
    if (isVisible.value && length) return;

    modal.header = header || "";
    modal.text = text || "";
    modal.buttonText = buttonText || "Хорошо";

    visible();
  }

  function destroy(): void {
    hidden();
  }

  return {
    modal,
    isVisible,
    showModal,
    destroy,
  };
});
