import { RoutePaths } from "../types";

enum PublicAppRoutes {
  MAIN = "MAIN",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  SEARCH = "SEARCH",
  POST = "CHARACTER",
}

enum PrivateAppRoutes {
  FAVORITES = "FAVORITES",
  HISTORY = "HISTORY",
}

export const publicRoutePaths: RoutePaths<PublicAppRoutes> = {
  [PublicAppRoutes.MAIN]: "/",
  [PublicAppRoutes.LOGIN]: "/login",
  [PublicAppRoutes.REGISTER]: "/register",
  [PublicAppRoutes.SEARCH]: "/search",
  [PublicAppRoutes.POST]: "/character/:id",
};

export const privateRoutePaths: RoutePaths<PrivateAppRoutes> = {
  [PrivateAppRoutes.FAVORITES]: "/favorites",
  [PrivateAppRoutes.HISTORY]: "/history",
};
