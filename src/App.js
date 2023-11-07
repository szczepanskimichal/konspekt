// import React from "react";
// import Form from "./components/Characters/Characters";

// function App() {
//   return <Form />;
//   // <div>
//   //   <Test x={9} />
//   // </div>
// }
// export default App;

import Test2 from "../components/Test/Test2";
import { ThemContext } from "./hooks/useTheme";

const App = () => {
  return (
    <ThemContext.Provider value={"dark"}>
      <Test2 />
    </ThemContext.Provider>
  );
};

export default App;
