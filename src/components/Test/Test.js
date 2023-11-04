import React, { Component } from "react";

function Child({ user, foo }) {
  const handleClick = () => {
    foo(" message to parent from child", user);
  };
  return (
    <div>
      {user} - <button onClick={foo}>REMOVE</button>
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

  send = (msg) => {
    console.log("message from parent");
  };

  render() {
    console.log("render parent");
    const { list } = this.state;
    return (
      <>
        {list.map((user) => (
          <Child key={user} user={user} foo={this.send} />
        ))}
      </>
    );
  }
}

export default Parent;
