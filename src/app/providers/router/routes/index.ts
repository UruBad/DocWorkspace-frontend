import type { RouteRecordRaw } from "vue-router";

import { route as mainRoute } from "./main";
import { route as notFoundRoute } from "./not-found";
import { route as workspaceAreaRoute } from "./workspace";
import { route as patientAreaRoute } from "./patient-area";
import { route as loginRoute } from "./login";
export const routes: readonly RouteRecordRaw[] = [
  mainRoute,
  loginRoute,
  notFoundRoute,
  patientAreaRoute,
  workspaceAreaRoute,
] as const;
