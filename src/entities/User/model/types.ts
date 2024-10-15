export enum ERole {
  ADMIN = "admin",
  DOCTOR = "doctor",
  PATIENT = "patient",
}

export enum EGender {
  MALE = "male",
  FEMALE = "female",
}

export interface IUser {
  id: number;
  lastname: string;
  firstname: string;
  username: string;
  role: ERole;
  aptitudes: IAptitude[];
  problems: IProblem[];
  services: IService[];
  avatar: string;
  gender: EGender;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAptitude {
  id: number;
  image: string;
  title: string;
  positions: IAptitudePosition[];
}

export interface IAptitudePosition {
  id: number;
  text: string;
}

export interface IProblem {
  id: number;
  text: string;
  description: string;
}

export interface IService {
  id: number;
  text: string;
  description: string;
  price: number;
}
