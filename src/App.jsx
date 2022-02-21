import React, { Fragment } from "react";
import BpmnComponent from "./components/bpmn/bpmn.modeler";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <BpmnComponent />
    </Fragment>
  );
}

export default App;
