import { Button } from "@mui/material";
import { useState } from "react";

export default function Test() {
  const [counter, setCounter] = useState(0);

  const hamdleClick = () => {
    setCounter(1234);
  };
  return (
    <>
      <Button onClick={hamdleClick} variant="contained" color="secondary">
        Click Me {counter}
      </Button>
    </>
  );
}
