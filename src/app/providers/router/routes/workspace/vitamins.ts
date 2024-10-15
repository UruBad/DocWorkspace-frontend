import type { RouteRecordRaw } from "vue-router";
import { SessionModel } from "@/entities/Session";
import {
  WorkspaceVitaminsPage,
  WorkspaceVitaminsButton,
} from "@/pages/workspace-area-vitamins";

export const routeName: string = "WorkspaceVitaminsPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "vitamins",
  components: {
    default: WorkspaceVitaminsPage,
    button: WorkspaceVitaminsButton,
  },
  meta: {
    breadcrumb: "Витамины",
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
