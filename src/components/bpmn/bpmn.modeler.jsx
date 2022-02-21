import React, { useEffect, useRef } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import { emptyBpmn } from "../../assets/empty.bpmn";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-font/dist/css/bpmn-embedded.css";

const BpmnComponent = () => {
  const bpmContainerRef = useRef();

  const newBpmnDiagram = () => {
    openBpmnDiagram(emptyBpmn);
  };

  const openBpmnDiagram = async (emptyBpmn) => {
    const modeler = new BpmnModeler({
      container: bpmContainerRef.current,
      keyboard: {
        bindTo: window,
      },
      propertiesPanel: {
        parent: "#propview",
      },
    });

    try {
      await modeler.importXML(emptyBpmn);
      const { xml } = await modeler.saveXML();
      console.log(xml);
      const canvas = modeler.get("canvas");
      canvas.zoom("fit-viewport");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newBpmnDiagram();
  }, []);

  return (
    <div
      style={{ height: "100vh" }}
      id="bpmncontainer"
      ref={bpmContainerRef}
    ></div>
  );
};

export default BpmnComponent;
