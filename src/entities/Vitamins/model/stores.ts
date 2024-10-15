import { defineStore } from "pinia";
import { api } from "../api";
import type { IVitamin } from "./types";

interface IVitaminsStore {
  getAll: () => Promise<IVitamin[]>;
  create: (vitamin: IVitamin) => Promise<IVitamin>;
  update: (id: number, vitamin: IVitamin) => Promise<IVitamin>;
  destroy: (id: number) => Promise<void>;
}

const NAMESPACE = "vitamins";

export const useVitaminsStore = defineStore(NAMESPACE, (): IVitaminsStore => {
  async function getAll() {
    const { data } = await api.getAll();

    return data;
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

  return {
    getAll,
    create,
    update,
    destroy,
  };
});
