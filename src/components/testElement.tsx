import React from "react";
import { ShadowProps, BorderProps, SizeProps } from "../interfaces/interfaces";
import { cssFromShadowProps } from "../css-utils/interface-to-css";

interface TestElementProps {
  shadowProps?: ShadowProps;
  borderProps?: BorderProps;
  sizeProps?: SizeProps;
}

export default function TestElement(props: TestElementProps) {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "200px",
        backgroundColor: "white",
        width: props.sizeProps ? props.sizeProps.width : "300px",
        height: props.sizeProps ? props.sizeProps.height : "140px",
        boxShadow: props.shadowProps
          ? cssFromShadowProps(props.shadowProps)
          : "",
      }}
    ></div>
  );
}
