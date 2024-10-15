import { SessionModel } from "@/entities/Session";
import {
  WorkspaceDoctorsPage,
  WorkspaceDoctorsButton,
} from "@/pages/workspace-area-doctors";
import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "WorkspaceDoctorsPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "doctors",
  components: {
    default: WorkspaceDoctorsPage,
    button: WorkspaceDoctorsButton,
  },
  meta: {
    breadcrumb: "Врачи",
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
