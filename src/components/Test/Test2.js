import { useContext } from "react";
import { ThemContext } from "../../App";
import { useTheme } from "../../hooks/useTheme";

function Child() {
  const theme = useTheme();
  console.log(theme);
  return <div>Child</div>;
}

export default function Test2() {
  return (
    <div>
      <Child />
    </div>
  );
}
