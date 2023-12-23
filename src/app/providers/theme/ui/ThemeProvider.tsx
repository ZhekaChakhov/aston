import { ReactNode, useMemo, useState } from "react";

import { ThemeContext } from "../context/Context";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [isLight, setIsLight] = useState(true);
  const value = useMemo(() => ({ isLight, setIsLight }), [isLight]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
