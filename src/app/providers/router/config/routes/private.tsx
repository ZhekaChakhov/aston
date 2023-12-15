import { CharacterPage } from "src/pages/CharacterPage";
import { FavoritesPage } from "src/pages/FavoritesPage";
import { HistoryPage } from "src/pages/HistoryPage";
import { MainPage } from "src/pages/MainPage";
import { SearchPage } from "src/pages/SearchPage";

import { privateRoutePaths } from "../utils/consts";

export const privateRoutes = [
  {
    path: privateRoutePaths.MAIN,
    Component: <MainPage />,
  },
  {
    path: privateRoutePaths.SEARCH,
    Component: <SearchPage />,
  },
  {
    path: privateRoutePaths.CHARACTER,
    Component: <CharacterPage />,
  },
  {
    path: privateRoutePaths.FAVORITES,
    Component: <FavoritesPage />,
  },
  {
    path: privateRoutePaths.HISTORY,
    Component: <HistoryPage />,
  },
];
