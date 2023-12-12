import { Route, Routes } from "react-router";
import { CharacterPage } from "src/pages/characterPage";
import { Home } from "src/pages/home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Home />} />
      <Route path="/history" element={<Home />} />
      <Route path="/favorites" element={<Home />} />
      <Route path="/character/:id" element={<CharacterPage />} />;
    </Routes>
  );
};
