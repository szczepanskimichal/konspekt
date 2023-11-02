// import React from "react";
// import Header from "./components/Header";

// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }
// export default App;

// import React from "react";
// import Header from "./components/Header";

// function App() {
//   const isLoggedIn = false;
//   return (
//     <>
//       <p>{isLoggedIn ? <span>Logged in</span> : <a>Logg in</a>}</p>
//     </>
//   );
// }

// export default App;

// ------------------------------------------------

import React from "react";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button variant="info">Info</Button>
      <Button variant="warrning">Warrning</Button>
      <Button variant="danger">Danger</Button>
    </>
  );
}
export default App;
