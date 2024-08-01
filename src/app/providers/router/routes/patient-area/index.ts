import type { RouteRecordRaw } from "vue-router";
import { route as patientRoute } from "./patient";

import { SessionModel } from "@/entities/Session";

export const routeName: string = "PatientAreaPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/patient",
  component: () => import("@/pages/patient-area"),

  children: [patientRoute],

  beforeEnter: (to, from, next) => {
    const session = SessionModel.useSessionStore();

    if (session.isAuth) {
      next();
    } else {
      next("/");
    }
  },
};
