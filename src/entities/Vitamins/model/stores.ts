import { defineStore } from "pinia";
import { api } from "../api";
import type { IVitamin } from "./types";
import { useReactiveArray } from "@/shared/lib/use/base/useReactiveArray";

interface IVitaminsStore {
  getAll: () => Promise<void>;
  create: (vitamin: IVitamin) => Promise<IVitamin>;
  update: (id: number, vitamin: IVitamin) => Promise<IVitamin>;
  destroy: (id: number) => Promise<IVitamin>;
  revert: (id: number) => Promise<IVitamin>;
  vitamins: IVitamin[];
}

const NAMESPACE = "vitamins";

export const useVitaminsStore = defineStore(NAMESPACE, (): IVitaminsStore => {
  const { array: vitamins, refresh } = useReactiveArray<IVitamin>([]);

  async function getAll() {
    const { data } = await api.getAll();

    refresh(data);
  }

  async function create(vitamin: IVitamin) {
    const { data } = await api.create(vitamin);

    return data;
  }

  async function update(id: number, vitamin: IVitamin) {
    const { data } = await api.update(id, vitamin);

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
    vitamins,
  };
});
