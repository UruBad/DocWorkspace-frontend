import type { FirebaseApi } from "@/shared/api";

export enum EGender {
  male = "male",
  female = "female",
}

export interface IUserFB {
  username: string;
  gender: EGender;
  email: string;
  phone?: string;
  avatar?: string;
  walletId?: FirebaseApi.TId;
  favoritesId?: FirebaseApi.TId;
  cartId?: FirebaseApi.TId;
  orderIds?: FirebaseApi.TId[];
  commentIds?: FirebaseApi.TId[];
  ratingIds?: FirebaseApi.TId[];
  aptitudes: IAptitude[];
  problems: IProblem[];
  services: IService[];
}

export interface IUser extends IUserFB {
  id: FirebaseApi.TId;
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
