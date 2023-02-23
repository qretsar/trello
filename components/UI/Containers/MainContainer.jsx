import { View, Dimensions } from "react-native";
import React from "react";

import { colors } from "../../../styles/colors";

const MainContainer = ({ ...props }) => {
  const container = {
    display: "flex",
    flex: 1,
    justifyContent: props.jc ? props.jc : "flex-start",
    alignItems: props.ai ? props.ai : "center",
    backgroundColor: props.bc ? props.bc : colors.background,
  };
  return (
    <View style={container} {...props}>
      {props.children}
    </View>
  );
};

export default MainContainer;
