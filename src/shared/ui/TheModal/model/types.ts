import type { Ref } from "vue";

export interface IModal {
  header?: string;
  text?: string;
  buttonText?: string;
}

export interface IModalStore {
  modal: IModal | never;
  isVisible: Ref<boolean>;
  showModal: (text: string, header?: string, buttonText?: string) => void;
  destroy: () => void;
}
