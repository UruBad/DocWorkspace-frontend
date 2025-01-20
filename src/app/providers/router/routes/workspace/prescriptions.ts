import type { RouteRecordRaw } from "vue-router";
import { SessionModel } from "@/entities/Session";
import { WorkspacePrescriptionsPage } from "@/pages/workspace-area-prescriptions";

export const routeName: string = "WorkspacePrescriptionsPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "prescriptions/:id",
  components: {
    default: WorkspacePrescriptionsPage,
  },
  meta: {
    breadcrumb: "Назначения пациента",
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
