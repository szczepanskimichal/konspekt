// import ReactDOM from "react-dom/client";

// // const imageUrl =
// // "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const productPrice = 199;

// const Product = (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {productPrice} NOK</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const Product = ({ imgUrl, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const App = () => (
//   <div>
//     <h1>Best selling products</h1>
//     <Product
//       imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name="Tacos With Lime"
//       price={10.99}
//     />
//     <Product
//       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name="Fries and Burger"
//       price={14.29}
//     />
//   </div>
// );

// // ReactDOM.createRoot(document.getElementById("root")).render(Product);
// const Product = ({
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   name,
//   price,
// }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// /*
//  * Określenie domyślnych wartości gwarantuje, że props.imgUrl będzie miał wartość,
//  * nawet jeśli nie była ona przekazana w komponencie rodzicu.
//  */
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Product name="Tacos With Lime" price={10.99} />
// );
// ------------------------------------------------------------
// const Profile = ({ name, email }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Email: {email}</p>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// const App = () => (
//   <div>
//     <Panel title="User profile">
//       <Profile name="Mango" email="mango@mail.com" />
//     </Panel>
//   </div>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// -----------------------------------------------------------
// import PropTypes from "prop-types";

// const Product = ({
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   name,
//   price,
// }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// Product.propTypes = {
//   imgUrl: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// ReactDOM.createRoot(document.getElementById("root")).render(Product);
// --------------------------------------------------------------
// const Product = ({ imgUrl, name, price, quantity }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <h1>Quantity: {quantity < 20 ? "Few left" : "In stock"}</h1>
//     <button type="button">Add to cart</button>
//   </div>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(Product);
// ----------------------------------------------------------------

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
//   { id: "id-4", name: "Redux in depth" },
// ];

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => (
//         <li>{book.name}</li>
//       ))}
//     </ul>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <BookList books={favouriteBooks} />
//     </div>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from ".src/App";
// import "./styles.css";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// --------------------------------------------
// Counter

// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button
//         type="button"
//         onClick={(evt) => {
//           console.log("Increment button was clicked!", evt); // działa
//           console.log("this.props: ", this.props); // działa
//         }}
//       >
//         Increment by {step}
//       </button>
//       <button
//         type="button"
//         onClick={(evt) => {
//           console.log("Decrement button was clicked!", evt); // działa
//           console.log("this.props: ", this.props); // działa
//         }}
//       >
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }

//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//   }

//   handleIncrement(evt) {
//     console.log("Increment button was clicked!", evt);
//     console.log("this.props: ", this.props);
//   }

//   handleDecrement(evt) {
//     console.log("Decrement button was clicked!", evt);
//     console.log("this.props: ", this.props);
//   }

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));
// -----------------------------------------------------
// import React, { Component } from "react";
// // import { ReactDOM } from "react";

// class Toggle extends Component {
//   state = { isOpen: false };

//   toggle = () => {
//     this.setState((state) => ({ isOpen: !state.isOpen }));
//   };
//   handleIncrement = () => {
//     this.setState((state, props) => ({
//       value: state.value + props.step,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState((state, props) => ({
//       value: state.value - props.step,
//     }));
//   };
//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <div>
//         <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
//         {isOpen && children}
//       </div>
//     );
//   }
// }

// export default Toggle;
// --------------------------------------------------------

// import React, { Component } from "react";

// // Przycisk otrzyma funkcję changeMessage (nazwa właściwości props),
// // która zostanie wywołana podczas zdarzenia onClick
// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// class App extends Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   // Metoda, którą będziemy przekazywać do przycisku
//   updateMessage = (evt) => {
//     console.log(evt); // Dostępny obiekt zdarzenia w odwołaniu onClick

//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }

// export default App;
// -----------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Header() {
//   return (
//     <header>
//       <h1>React</h1>
//     </header>
//   );
// }
// function Main() {
//   return (
//     <main>
//       <p>React is a JavaScript library for building user interfaces.</p>
//     </main>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <p>
//         <a href="https://reactjs.org">reactjs.org</a>

//         <p>I TO JEST ZAJEBISTE</p>
//       </p>
//     </footer>
//   );
// }

// function Post({ name = "Michal", surname }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{surname}</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       {/* <Header />
//       <Main />
//       <Footer /> */}
//       <Post name="Mija" surname="Cziczi" tab={[1, 2, 3, 4]} />
//       <Post surname="Szczepanski" tab={[1, 2, 3, 4]} />
//     </div>
//   );
// }

function Panel({ children }) {
  return (
    <div>
      <h1>Panel</h1>
      {children}
    </div>
  );
}

function User(params) {
  return <p>User</p>;
}

function App() {
  return (
    <div>
      <Panel>
        <User />
        <p>mozna tez dodac cos tak</p>
      </Panel>
    </div>
  );
}

root.render(<App />);
