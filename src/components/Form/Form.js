import React, { Component } from "react";
//formularz kontrolowany
class Form extends Component {
  state = {
    username: "michal",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username);
  };
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value.toUpperCase(),
    });
  };
  render() {
    console.log(this);
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
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
