import { createContext } from "react";

export type ThemeContext = {
  isLight: boolean;
  setIsLight: (c: boolean) => void;
};

export const ThemeContext = createContext<ThemeContext>({
  isLight: true,
  setIsLight: () => undefined,
});
