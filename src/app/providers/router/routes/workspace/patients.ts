import type { RouteRecordRaw } from "vue-router";
import { SessionModel } from "@/entities/Session";
import {
  WorkspacePatientsPage,
  WorkspacePatientsButton,
} from "@/pages/workspace-area-patients";

export const routeName: string = "WorkspacePatientsPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "patients",
  components: {
    default: WorkspacePatientsPage,
    button: WorkspacePatientsButton,
  },
  meta: {
    breadcrumb: "Пациенты",
  },

  beforeEnter: (to, from, next) => {
    const session = SessionModel.useSessionStore();

    if (session.isAuth) {
      next();
    } else {
      next("/login");
    }
  },
};
