import { FavoritesPage } from "src/pages/FavoritesPage";
import { HistoryPage } from "src/pages/HistoryPage";

import { privateRoutePaths } from "../utils/consts";

export const privateRoutes = [
  {
    path: privateRoutePaths.FAVORITES,
    Component: <FavoritesPage />,
  },
  {
    path: privateRoutePaths.HISTORY,
    Component: <HistoryPage />,
  },
];
