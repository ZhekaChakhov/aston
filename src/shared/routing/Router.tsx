import { Route, Routes } from "react-router";
import { Home } from "src/pages/home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Home />} />
      <Route path="/history" element={<Home />} />
      <Route path="/favorites" element={<Home />} />
    </Routes>
  );
};
