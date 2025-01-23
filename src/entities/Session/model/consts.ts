import { EGender, ERole, type IUser } from "@/entities/User/model";

const defaultUserName = "Anonymous";

export const DEFAULT_USER: IUser = {
  deleted: false,
  aptitudes: [],
  problems: [],
  services: [],
  id: 0,
  username: defaultUserName,
  role: ERole.PATIENT,
  gender: EGender.MALE,
  avatar: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  lastname: "",
  firstname: "",
};
