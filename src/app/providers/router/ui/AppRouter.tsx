import { Route, Routes } from "react-router";
import { CharacterPage } from "src/pages/CharacterPage";
import { MainPage } from "src/pages/MainPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<MainPage />} />
      <Route path="/history" element={<MainPage />} />
      <Route path="/favorites" element={<MainPage />} />
      <Route path="/character/:id" element={<CharacterPage />} />;
    </Routes>
  );
};
