import { defineStore } from "pinia";
import { DoctorsApi as api } from "../../api";
import type { IUser } from ".././types";
import { useReactiveArray } from "@/shared/lib/use/base/useReactiveArray";

interface IDoctorsStore {
  getAll: () => Promise<void>;
  create: (doctor: IUser) => Promise<IUser>;
  update: (id: number, vitamin: IUser) => Promise<IUser>;
  destroy: (id: number) => Promise<IUser>;
  revert: (id: number) => Promise<IUser>;
  doctors: IUser[];
}

const NAMESPACE = "doctors";

export const useDoctorsStore = defineStore(NAMESPACE, (): IDoctorsStore => {
  const { array: doctors, refresh } = useReactiveArray<IUser>([]);

  async function getAll() {
    const { data } = await api.getAll();

    refresh(data);
  }

  async function create(doctor: IUser) {
    const { data } = await api.create(doctor);

    return data;
  }

  async function update(id: number, doctor: IUser) {
    const { data } = await api.update(id, doctor);

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
    doctors,
  };
});
