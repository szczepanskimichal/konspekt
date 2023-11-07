import { useState } from "react";
function getRandomeColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const useRandomColor = () => {
  const [color, setColor] = useState("#000");
  const changeColor = () => {
    setColor(getRandomeColor());
  };
  return {
    color,
    changeColor,
  };
};
