import ReactDOM from "react-dom/client";

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

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li>{book.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <BookList books={favouriteBooks} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
