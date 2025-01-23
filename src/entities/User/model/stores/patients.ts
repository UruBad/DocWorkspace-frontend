import { defineStore } from "pinia";
import { PatientsApi as api } from "../../api";
import type { ICreateUser, IUser } from ".././types";
import { useReactiveArray } from "@/shared/lib/use/base/useReactiveArray";

interface IPatientsStore {
  getAll: () => Promise<void>;
  create: (patient: ICreateUser) => Promise<IUser>;
  update: (id: number, patient: ICreateUser) => Promise<IUser>;
  destroy: (id: number) => Promise<IUser>;
  revert: (id: number) => Promise<IUser>;
  patients: IUser[];
}

const NAMESPACE = "patients";

export const usePatientsStore = defineStore(NAMESPACE, (): IPatientsStore => {
  const { array: patients, refresh } = useReactiveArray<IUser>([]);

  async function getAll() {
    const { data } = await api.getAll();

    refresh(data);
  }

  async function create(patient: ICreateUser) {
    const { data } = await api.create(patient);

    return data;
  }

  async function update(id: number, patient: ICreateUser) {
    const { data } = await api.update(id, patient);

    return data;
  }

  async function destroy(id: number) {
    const { data } = await api.destroy(id);

    return data;
  }

  async function revert(id: number) {
    const { data } = await api.revert(id);

    return data;
  }

  return {
    getAll,
    create,
    update,
    destroy,
    revert,
    patients,
  };
});
