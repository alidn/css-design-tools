import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { Divider } from "@material-ui/core";
import { defaultShadowProps, ShadowProps } from "../interfaces/interfaces";

interface ShadowPanelProps {
  hidden: boolean;
  updateShadowProps: (props: ShadowProps) => void;
}

export default function ShadowPanel(props: ShadowPanelProps) {
  let [vOffsetValue, setVOffsetValue] = useState(
    defaultShadowProps.verticalOffset
  );
  let [blurRadius, setBlurRadius] = useState(defaultShadowProps.blurRadius);
  let [spreadRadius, setSpreadRadius] = useState(
    defaultShadowProps.spreadRadius
  );

  let [shadowProps, setShadowProps] = useState(defaultShadowProps);

  const handleVOffsetSliderChange = (
    _event: any,
    newValue: number | number[]
  ) => {
    setVOffsetValue(typeof newValue === "number" ? newValue : 0);
    setShadowProps((prevProps) => {
      prevProps.verticalOffset =
        typeof newValue === "number" ? newValue : newValue[0];
      return prevProps;
    });
    props.updateShadowProps(shadowProps);
  };

  const handleBlurRadiusSliderChange = (
    _event: any,
    newValue: number | number[]
  ) => {
    setBlurRadius(typeof newValue === "number" ? newValue : 0);
    setShadowProps((prevProps) => {
      prevProps.blurRadius =
        typeof newValue === "number" ? newValue : newValue[0];
      return prevProps;
    });
    props.updateShadowProps(shadowProps);
  };

  const handleSpreadRadiusSliderChange = (
    _event: any,
    newValue: number | number[]
  ) => {
    setSpreadRadius(typeof newValue === "number" ? newValue : 0);
    setShadowProps((prevProps) => {
      prevProps.spreadRadius =
        typeof newValue === "number" ? newValue : newValue[0];
      return prevProps;
    });
    props.updateShadowProps(shadowProps);
  };

  return (
    <div
      hidden={props.hidden}
      style={{
        padding: "20px",
        backgroundColor: "#F6F9FC",
        margin: "10px",
        borderRadius: "15px",
      }}
    >
      <p id="input-slider" style={{ fontSize: "18pt" }}>
        Vertical Offset
      </p>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            max={200}
            value={vOffsetValue}
            onChange={handleVOffsetSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <p style={{ fontSize: "15pt" }}>{vOffsetValue}px</p>
        </Grid>
      </Grid>
      <Divider />
      {/********** BLUR RADIUS **********/}
      <p id="input-slider" style={{ fontSize: "18pt" }}>
        Blur Radius
      </p>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            max={200}
            value={blurRadius}
            onChange={handleBlurRadiusSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <p style={{ fontSize: "15pt" }}>{blurRadius}px</p>
        </Grid>
      </Grid>
      <Divider />
      {/********** SPREAD RADIUS **********/}
      <p id="input-slider" style={{ fontSize: "18pt" }}>
        Spread Radius
      </p>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            min={-100}
            max={200}
            value={spreadRadius}
            onChange={handleSpreadRadiusSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <p style={{ fontSize: "15pt" }}>{spreadRadius}px</p>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
