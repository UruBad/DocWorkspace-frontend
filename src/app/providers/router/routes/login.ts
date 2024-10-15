import { SessionModel } from "@/entities/Session";
import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "LoginPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/login",
  component: () => import("@/pages/login"),
  meta: {
    layout: "empty",
  },

  beforeEnter: (to, from, next) => {
    const session = SessionModel.useSessionStore();

    if (!session.isAuth) {
      next();
    } else {
      next("/");
    }
  },
};
