import { LoginPage } from "src/pages/LoginPage";
import { MainPage } from "src/pages/MainPage";
import { RegisterPage } from "src/pages/RegisterPage";
import { SearchPage } from "src/pages/SearchPage";

import { publicRoutePaths } from "../utils/consts";

export const publicRoutes = [
  {
    path: publicRoutePaths.MAIN,
    Component: <MainPage />,
  },
  {
    path: publicRoutePaths.LOGIN,
    Component: <LoginPage />,
  },
  {
    path: publicRoutePaths.REGISTER,
    Component: <RegisterPage />,
  },
  {
    path: publicRoutePaths.SEARCH,
    Component: <SearchPage />,
  },
];
