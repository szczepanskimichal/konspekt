import { Button } from "@mui/material";
import { useState } from "react";

export default function Test() {
  console.log(0);
  const [counter, setCounter] = useState(0);
  //   const hamdleClick = () => {
  //     setCounter(1234);
  //   };
  return (
    <>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </>
  );
}
