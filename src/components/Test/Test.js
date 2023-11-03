// export default function Test() {
//   return <div>Test</div>;
// }
import React, { Component } from "react";

class Test extends Component {
  foo() {
    console.log("foo");
  }
  render() {
    return <button onClick={this.foo}>Click</button>;
  }
}
export default Test;
