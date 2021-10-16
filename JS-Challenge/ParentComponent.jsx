import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

// React class based component
class ParentComponent extends Component {
  render() {
    return (
      <div>
        <h1>I am the parent component</h1>
        <ChildComponent />
      </div>
    );
  }
}
ReactDOM.render(<ParentComponent />, mountNode);
