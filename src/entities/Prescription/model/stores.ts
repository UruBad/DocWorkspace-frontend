import { defineStore } from "pinia";
import { api } from "../api";
import type { IPrescription } from "./types";
import { useReactiveArray } from "@/shared/lib/use/base/useReactiveArray";

interface IVitaminsStore {
  getAll: () => void;
  create: (vitamin: IPrescription) => Promise<IPrescription>;
  update: (id: number, vitamin: IPrescription) => Promise<IPrescription>;
  destroy: (id: number) => Promise<void>;
  revert: (id: number) => Promise<void>;
  prescriptions: IPrescription[];
}

const NAMESPACE = "prescriptions";

export const usePrescriptionsStore = defineStore(
  NAMESPACE,
  (): IVitaminsStore => {
    const { array: prescriptions, refresh } = useReactiveArray<IPrescription>(
      []
    );

    async function getAll() {
      const { data } = await api.getAll();

      refresh(data);
    }

    async function create(prescription: IPrescription) {
      const { data } = await api.create(prescription);

      return data;
    }

    async function update(id: number, prescription: IPrescription) {
      const { data } = await api.update(id, prescription);

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
      prescriptions,
    };
  }
);
