import { UserModel } from "@/entities/User";
import { useIsBoolean } from "@/shared/lib/use/base/useIsBoolean";
import { defineStore } from "pinia";
import { reactive } from "vue";

const NAMESPACE = "patient-form-popup";

export const useUserFormPopup = defineStore(NAMESPACE, () => {
  const patient = reactive(UserModel.DEFAULT_USER);
  const { getAll } = UserModel.usePatientsStore();

  const { isBoolean: visible, setTrue: open, setFalse } = useIsBoolean(false);

  function show(role: UserModel.ERole): void;
  function show(user: UserModel.IUser): void;
  function show(userOrRole: unknown) {
    let item = { ...UserModel.DEFAULT_USER };
    if ((Object.values(UserModel.ERole) as unknown[]).includes(userOrRole)) {
      item.role = userOrRole as UserModel.ERole;
    } else {
      item = { ...item, ...(userOrRole as UserModel.IUser) };
    }

    patient.id = item.id;
    patient.aptitudes = item.aptitudes;
    patient.avatar = item.avatar;
    patient.createdAt = item.createdAt;
    patient.firstname = item.firstname;
    patient.gender = item.gender;
    patient.lastname = item.lastname;
    patient.problems = item.problems;
    patient.role = item.role;
    patient.services = item.services;
    patient.updatedAt = item.updatedAt;
    patient.username = item.username;
    patient.deleted = item.deleted;

    open();
  }

  const close = () => {
    setFalse();
    getAll();
  };

  return { patient, visible, close, show, getAll };
});
