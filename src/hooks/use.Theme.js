import { createContext, useContext } from "react";

export const ThemContext = createContext();

export const useTheme = () => {
  return useContext(ThemContext);
};
