import { View, Dimensions } from "react-native";
import React from "react";
import { colors } from "../colors";
const wHeight = Dimensions.get("window").height;
const wWidth = Dimensions.get("window").width;

export default function BottomContainer({ ...props }) {
  const container = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    // height: wHeight / 12,
    width: "100%",
    height: props.height ? props.height : "5%",
    //Obavezno promeniti bottom vrednost na MainContainer
    backgroundColor: props.c ? props.c : colors.primary,
    flexDirection: "row",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.primaryBright,
    elevation: 50,
  };
  return <View style={container}>{props.children}</View>;
}
