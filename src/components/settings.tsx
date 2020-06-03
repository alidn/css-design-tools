import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import ShadowPanel from "./shadowPanel";
import { ShadowProps } from "../interfaces/interfaces";

const useTabsStyles = makeStyles({
  root: {
    height: "40px",
  },
  indicator: {
    height: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#408AF8",
  },
});

const useTabStyles = makeStyles({
  root: {
    margin: "0px 10px",
  },
});

interface SettingsProps {
  updateShadowProps: (props: ShadowProps) => void;
}

export default function Settings(props: SettingsProps) {
  const tabsStyles = useTabsStyles();
  const tabStyles = useTabStyles();
  let [tabIndex, setTabIndex] = useState(0);

  const updateShadowProps = (newProps: ShadowProps) => {
    props.updateShadowProps(newProps);
  };

  const handleChange = function (
    _event: React.ChangeEvent<{}>,
    newIndex: number
  ) {
    setTabIndex(newIndex);
  };

  return (
    <div
      style={{
        marginTop: "100px",
        marginRight: "20px",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <Tabs classes={tabsStyles} value={tabIndex} onChange={handleChange}>
        <Tab classes={tabStyles} value={0} label="Box Shadow"></Tab>
        <Tab classes={tabStyles} value={1} label="Border"></Tab>
        <Tab classes={tabStyles} value={2} label="Size & Position"></Tab>
      </Tabs>
      <ShadowPanel
        hidden={tabIndex !== 0}
        updateShadowProps={updateShadowProps}
      />
    </div>
  );
}
