import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CharacterPage } from "src/pages/CharacterPage";
import { FavoritesPage } from "src/pages/FavoritesPage";
import { HistoryPage } from "src/pages/HistoryPage";
import { LoginPage } from "src/pages/LoginPage";
import { MainPage } from "src/pages/MainPage";
import { NotFoundPage } from "src/pages/NotFoundPage";
import { RegisterPage } from "src/pages/RegisterPage";
import { SearchPage } from "src/pages/SearchPage";
import { Loader } from "src/shared/ui/Loader/Loader";
import { ProtectedRoute } from "src/widgets/ProtectedRoute";

// TODO: fix private routes refresh bug

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={false} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoute isAuthenticated />}>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>
        <Route path="/:id" element={<CharacterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
