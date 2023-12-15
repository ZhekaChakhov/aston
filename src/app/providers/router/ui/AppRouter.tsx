import { Route, Routes } from "react-router";
import { MainPage } from "src/pages/MainPage";

import { privateRoutes } from "../config/routes/private";
import { publicRoutes } from "../config/routes/public";

interface Props {
  isAuth: boolean;
}

export const AppRouter = ({ isAuth }: Props) => {
  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} element={Component} key={path} />
      ))}
      <Route path="*" element={<MainPage />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={Component} key={path} />
      ))}
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};
