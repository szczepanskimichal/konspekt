// import React from "react";
// import Form from "./components/Characters/Characters";

// function App() {
//   return <Form />;
//   // <div>
//   //   <Test x={9} />
//   // </div>
// }
// export default App;
import React from "react";
import Test2 from "../src/components/Test/Test2";
// import { ThemContext } from "./hooks/useTheme";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Test2 />
    </ThemeProvider>
  );
};

export default App;
