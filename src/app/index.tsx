// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "src/pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
