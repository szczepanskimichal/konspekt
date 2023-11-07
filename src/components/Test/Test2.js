import { useContext } from "react";
// import { ThemContext } from "../../App";
import { useTheme } from "../../hooks/useTheme";
import { ThemeContext } from "../ThemeProvider";

function Child() {
  const { theme, changeTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      Child - {theme}
      <button onClick={() => changeTheme("light")}>Light</button>
    </div>
  );
}

export default function Test2() {
  return (
    <div>
      <Child />
    </div>
  );
}
