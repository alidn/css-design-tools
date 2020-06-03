import React, { useState } from "react";
import "./App.css";
import TestElement from "./components/testElement";
import { ShadowProps } from "./interfaces/interfaces";
import Settings from "./components/settings";

const defaultShadowProps: ShadowProps = {
  horizontalOffset: 0,
  verticalOffset: 48,
  blurRadius: 150,
  spreadRadius: -30,
  inset: false,
};

function App() {
  let [shadowProps, setShadowProps] = useState(defaultShadowProps);

  const updateShadowProps = (newProps: ShadowProps) => {
    setShadowProps(() => {
      let props = { ...newProps };
      return props;
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <TestElement shadowProps={shadowProps} />
      <Settings updateShadowProps={updateShadowProps} />
    </div>
  );
}

export default App;
