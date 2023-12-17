import { RoutePaths } from "../types";

enum PublicAppRoutes {
  MAIN = "MAIN",
  SEARCH = "SEARCH",
  CHARACTER = "CHARACTER",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

enum PrivateAppRoutes {
  MAIN = "MAIN",
  SEARCH = "SEARCH",
  CHARACTER = "CHARACTER",
  FAVORITES = "FAVORITES",
  HISTORY = "HISTORY",
}

export const publicRoutePaths: RoutePaths<PublicAppRoutes> = {
  [PublicAppRoutes.MAIN]: "/",
  [PublicAppRoutes.SEARCH]: "/search",
  [PublicAppRoutes.CHARACTER]: "/character/:id",
  [PublicAppRoutes.LOGIN]: "/login",
  [PublicAppRoutes.REGISTER]: "/register",
};

export const privateRoutePaths: RoutePaths<PrivateAppRoutes> = {
  [PrivateAppRoutes.MAIN]: "/",
  [PrivateAppRoutes.SEARCH]: "/search",
  [PrivateAppRoutes.CHARACTER]: "/character/:id",
  [PrivateAppRoutes.FAVORITES]: "/favorites",
  [PrivateAppRoutes.HISTORY]: "/history",
};
