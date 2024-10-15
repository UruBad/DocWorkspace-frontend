import { EGender, ERole } from "@/entities/User/model/types";

export const USER_ROLE_OPTIONS = [
  {
    id: 1,
    value: ERole.DOCTOR,
    label: "Доктор",
  },
  {
    id: 2,
    value: ERole.PATIENT,
    label: "Пациент",
  },
];

export const USER_GENDER_OPTIONS = [
  {
    id: 1,
    value: EGender.MALE,
    label: "Мужчина",
  },
  {
    id: 2,
    value: EGender.FEMALE,
    label: "Женщина",
  },
];
