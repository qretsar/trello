import { View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { colors } from "../colors";
const wHeight = Dimensions.get("window").height;
const wWidth = Dimensions.get("window").width;

export default function TopContainer({ ...props }) {
  const container = {
    // position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: props.jc ? props.jc : "center",
    alignContent: "center",
    alignItems: "center",
    // marginTop: wHeight * 0.02,
    // marginBottom: wHeight * 0.01,
    // minHeight: wHeight / 15,
    // width: wWidth,
    backgroundColor: props.c ? props.c : colors.primary,
    top: 0,
    zIndex: 1,
    borderBottomWidth: props.bbw ? props.bbw : 0,
    borderBottomColor: colors.primaryBright,
  };
  return (
    <View style={container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        horizontal={true}
      >
        {props.children}
      </ScrollView>
    </View>
  );
}
