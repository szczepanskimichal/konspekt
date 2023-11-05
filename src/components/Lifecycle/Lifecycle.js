// The 'clear' import is not used, so it can be removed
// import { clear } from "@testing-library/user-event/dist/clear";
import React, { Component } from "react";
// -----------------------------------
class Child extends Component {
  state = {
    name: "Mija",
  };
  componentDidMount() {
    console.log("componentDidMount child");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");

    if (props.name !== state.name) {
      return {
        name: props.name,
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate child", this.props.name);
    console.log("prevState", prevState);
  }

  render() {
    console.log("Child render");
    return <div>Child - {this.state.name}</div>;
  }
}

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      counter1: 0,
      name: "Ada",
    };
  }
  increment = () => {
    this.setState((prevState) => ({
      counter1: prevState.counter1 + 1,
    }));
    console.log(this.setState.counter1);
  };

  changeName = () => {
    this.setState({
      name: "Mija",
    });
  };

  componentDidMount() {
    console.log("componentDidMount");

    // this.id = setInterval(() => {
    //   this.setState((prevState) => ({
    //     counter1: prevState.counter1 + 1,
    //   }));
    // }, 2000);
    setTimeout(() => {
      alert("REKLAMA");
    }, 10000);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.props.name, this.id);
    // if (this.state.counter1 === 10) {
    //   clearInterval(this.id);
    // }
    console.log("prevState", prevState);
  }
  render() {
    console.log("render");
    const { counter1 } = this.state;
    // return <>Life cycle</>;
    return (
      <>
        <h1>{counter1}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.changeName}>Change name</button>
        <Child name={this.state.name} />
      </>
    );
  }
}
export default Lifecycle;
