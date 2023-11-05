import React, { Component } from "react";
//formularz kontrolowany

const initValues = {
  username: "Welcom in form",
  password: "",
  isCheckd: "",
  color: "",
  country: "",
};

const COLORS = {
  WHITE: "white",
  BLACK: "black",
};

class Form extends Component {
  state = {
    // username: "michal",
    // password: "",
    ...initValues,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username);
    this.resetForm();
    // this.setState({
    //   username: "",
    //   password: "",
    // });
  };
  handleChange = (event) => {
    // console.log(event.target.value);
    const { value, name, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
      //   [event.target.name]: event.target.value.toUpperCase(),
    });
  };

  //   handleChangeCheckbox = (event) => {
  //     console.log(event.target.checked);
  //     this.setState({
  //       isCheckd: event.target.checked,
  //     });
  //  to jest do wywyalenia po refaktoryzacji };

  resetForm = () => {
    this.setState(initValues);
  };
  render() {
    console.log(this);
    const { username, password, isCheckd, color, country } = this.state;
    const { WHITE, BLACK } = COLORS;
    return (
      <div>
        <h1>{this.state.username}</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
              type="checkbox"
              name="isCheckd"
              value={isCheckd}
              onChange={this.handleChange}
            />

            <button type="submit" value="white" checked={color === "white"}>
              Send
            </button>
          </div>
          <label>
            black
            <input
              onChange={this.handleChange}
              type="radio"
              name="color"
              value={BLACK}
              checked={color === BLACK}
            />
          </label>
          <label>
            white
            <input
              onChange={this.handleChange}
              type="radio"
              name="color"
              value={WHITE}
              checked={color === WHITE}
            />
          </label>
          <br />
          <select name="country" value={country} onChange={this.handleChange}>
            <option value="">Choose</option>
            <option value="PL">Poland</option>
            <option value="DE">Germany</option>
            <option value="US">USA</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
