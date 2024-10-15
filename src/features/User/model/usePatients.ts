import { PatientsApi } from "@/entities/User";

export function usePatients() {
  async function loadPatients() {
    const { data } = await PatientsApi.getAll();
  }

  return {
    loadPatients,
  };
}
