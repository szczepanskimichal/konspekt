// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// ----------------------------------------------------------------
// const App = () => {
//   return (
//     <p
//       style={{
//         margin: 8,
//         padding: "12px 16px",
//         borderRadius: 4,
//         backgroundColor: "gray",
//         color: "white",
//       }}
//     >
//       Please update your email!
//     </p>
//   );
// };

// export default App;
// ----------------------------------------------------------------

import { Alert } from "./Alert";

export const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};
