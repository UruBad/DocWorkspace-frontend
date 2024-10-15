import { AppPages } from "../router";

interface IRoute<T extends object = {}> {
  name: string;
  params: T;
}

export class AppRoutes {
  private constructor() {}

  static getLogin() {
    return getRoute(AppPages.login, {});
  }

  static getMain() {
    return getRoute(AppPages.main, {});
  }

  static getNotFound() {
    return getRoute(AppPages.notFound, {});
  }

  static getWorkspaceArea() {
    return getRoute(AppPages.workspace, {});
  }

  static getWorkspaceDoctors() {
    return getRoute(AppPages.workspaceDoctors, {});
  }

  static getWorkspaceVitamins() {
    return getRoute(AppPages.workspaceVitamins, {});
  }

  static getWorkspacePatients() {
    return getRoute(AppPages.workspacePatients, {});
  }
}

// TODO необязательный 2й параметр
function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
  return {
    name,
    params,
  };
}
