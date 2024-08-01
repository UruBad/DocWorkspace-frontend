import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "PatientPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: ":id/view",
  component: () => import("@/pages/patient-area-view"),
};
