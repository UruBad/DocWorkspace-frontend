import { UserModel } from "@/entities/User";

export function useUserForm() {
  const { create: createPatient, update: updatePatient } =
    UserModel.usePatientsStore();
  const { create: createDoctor, update: updateDoctor } =
    UserModel.useDoctorsStore();

  return {
    createPatient,
    updatePatient,
    createDoctor,
    updateDoctor,
  };
}
