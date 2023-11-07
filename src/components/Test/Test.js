import { useState, useEffect } from "react";
import { useRandomColor } from "../../hooks/useRandomColor";

// function getRandomeColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

export default function Test() {
  const { color, changeColor } = useRandomColor();
  // const [color, setColor] = useState("#000");

  // const changeColor = () => {
  //   setColor(getRandomeColor());
  // };

  useEffect(() => {
    console.log("On mount");
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          height: 100,
          width: 100,
        }}
      />
      <button onClick={changeColor} variant="contained" color="primary">
        Change color
      </button>
    </>
  );
}
