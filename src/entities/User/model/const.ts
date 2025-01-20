import { EGender, ERole, type IUser } from "@/entities/User/model/types";

export const DEFAULT_USER: IUser = {
  aptitudes: [],
  avatar: "",
  createdAt: new Date(),
  firstname: "",
  gender: EGender.MALE,
  lastname: "",
  problems: [],
  role: ERole.PATIENT,
  services: [],
  updatedAt: new Date(),
  username: "",
  id: 0,
  deleted: false,
};

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
