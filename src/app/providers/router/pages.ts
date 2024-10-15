import { routeName as login } from "./routes/login";
import { routeName as workspace } from "./routes/workspace";
import { routeName as workspaceDoctors } from "./routes/workspace/doctors";
import { routeName as workspacePatients } from "./routes/workspace/patients";
import { routeName as workspaceVitamins } from "./routes/workspace/vitamins";
import { routeName as main } from "./routes/main";
import { routeName as notFound } from "./routes/not-found";

export const pages = {
  login,
  main,
  notFound,
  workspace,
  workspaceDoctors,
  workspacePatients,
  workspaceVitamins,
} as const;
