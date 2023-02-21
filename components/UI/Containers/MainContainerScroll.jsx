import { View, Dimensions, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
const { background } = colors;
//Top i bottom kontrolsu vidljivost od menija
const StyledView = styled(View)`
  position: absolute;
  bottom: 5%;
  top: 0;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: ${(props) => (props.jc ? props.jc : "flex-start")};
  background-color: ${(props) => (props.bc ? props.bc : background)};
  margin-top: ${(props) => (props.mt ? props.mt : 0)};
`;
const MainContainerScroll = ({ ...props }) => {
  return <StyledView {...props}></StyledView>;
};

export default MainContainerScroll;
