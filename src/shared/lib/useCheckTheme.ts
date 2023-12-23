import { useContext } from "react";
import { ThemeContext } from "src/app/providers/theme/context/Context";

export const useChekTheme = () => {
  const { isLight } = useContext(ThemeContext);
  const theme = isLight ? "bg-white" : "bg-blue-300";
  return theme;
};
