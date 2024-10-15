import type { RouteRecordRaw } from "vue-router";
import { route as patientsRoute } from "./patients";
import {
  route as doctorsRoute,
  routeName as doctorsRouteName,
} from "./doctors";
import { route as vitaminsRoute } from "./vitamins";
import { SessionModel } from "@/entities/Session";
import WorkspaceAreaPage from "@/pages/workspace-area";

export const routeName: string = "WorkspaceAreaPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/workspace",
  components: {
    default: WorkspaceAreaPage,
  },
  redirect: { name: doctorsRouteName },
  meta: {
    layout: "admin",
    breadcrumb: "Главная",
    to: "/",
  },

  children: [patientsRoute, doctorsRoute, vitaminsRoute],

  beforeEnter: (to, from, next) => {
    const session = SessionModel.useSessionStore();

    if (session.isAuth) {
      next();
    } else {
      next("/login");
    }
  },
};
