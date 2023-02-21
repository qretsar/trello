import { View } from "react-native";
import React from "react";
import { colors } from "../colors";

const VerticalLineBreak = ({ ...props }) => {
  const container = {
    width: 1,
    height: props.h ? props.h : "100%",
    backgroundColor: props.c ? props.c : colors.primaryDarkTransparent,
    marginHorizontal: props.ph ? props.ph : 2,
    // display: "flex",
    // minWidth: props.w ? props.w : "40%",
    // maxHeight: props.h ? props.bw : 1,
    // justifyContent: "center",
    // alignSelf: "center",
    // borderBottomColor: props.bc ? props.bc : colors.primary,
    // borderBottomWidth: props.h ? props.h : 1,
    // // marginHorizontal: props.mh ? props.mh : 50,
    // marginVertical: props.mv ? props.mv : 10,
  };
  return <View style={container}></View>;
};

export default VerticalLineBreak;
