// export default function Test() {
//   return <div>Test</div>;
// }
// import { tab } from "@testing-library/user-event/dist/tab";
// import React, { Component } from "react";

// class Test extends Component {
// constructor(props) {
//   super(props);
//   console.log(this);
//   this.foo = this.foo.bind(this);
// }
// xyz = function () {
//   console.log("hei jeg heter: ", this.props.x);
// };

// // foo(name) {
// //   // event.preventDefault();
// //   console.log("Hei, Jeg heter", this.props.x);
// // }
// render() {
//   console.log(this);
//   return <button onCLick={this.xyz}>Click</button>;

// <button onClick={(event) => this.foo("Cziczi", event)}>Click</button>
// constructor(props) {
//   super(props);

//   this.state = {
//     counter: 1,
//     name: "Michal",
//     tab: [1, 2, 3, 4],
//   };
// }
// increment = () => {
//   console.log("increment", this.state.counter);

//   // this.setState({
//   //   counter: "nyStart",
//   // });
//   this.setState((prevState) => {
//     return {
//       counter: prevState.counter + 1,
//     };
//   });

//   this.setState((prevState) => {
//     return {
//       tab: [...prevState.tab, 5],
//     };
//   });
//   console.log("increment", this.state.counter);
//   this.setState(
//     {
//       name: "Cziczi",
//     },
//     () => {
//       console.log("after state update:", this.state.name);
//     }
//   );
import React, { Component } from "react";

function Child({ user }) {
  return (
    <div>
      {user} - <button>REMOVE</button>
    </div>
  );
}

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ada", "mija", "michal"],
    };
  }
}
render(){
  console.log("render parent");
  const { list } = this.state;
  return (
    <>
      {list.map((user) => (
        <Child key={user} user={user} />
      ))}
    </>
  );
}

export default Parent;
