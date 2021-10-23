import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <p>I am the Parent Component</p>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;
