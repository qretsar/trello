import { View, Text } from "react-native";
import React from "react";
import { colors } from "../colors";

const ColumnContainer = ({ ...props }) => {
  const container = {
    display: "flex",
    flex: props.fx ? props.fx : 0,
    // flexDirection: "column",
    justifyContent: props.jc ? props.jc : "center",
    paddingVertical: props.pv ? props.pv : 20,
    // alignContent: "space-between",
    alignItems: "center",
    marginTop: props.mt ? props.mt : 0,
    marginBottom: props.mb ? props.mb : 0,
    backgroundColor: props.bgc ? props.bgc : "transparent",
    borderWidth: props.bw ? props.bw : 0,
    borderColor: props.bcc ? props.bcc : colors.primary,
    borderRadius: props.br ? props.br : 10,
    width: props.width ? props.width : "90%",
    alignSelf: props.as ? props.as : "center",
    // paddingVertical: 20,
  };
  return <View style={container}>{props.children}</View>;
};

export default ColumnContainer;
