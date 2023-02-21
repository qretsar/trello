import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
export default function BigText(props) {
  const text = {
    display: 'flex',
    fontSize: props.fs ? props.fs : 30,
    fontWeight: props.fw ? props.fw : 'bold',
    color:
      props.color || props.tc ? props.color || props.tc : colors.primaryDark,
    textAlign: props.ta ? props.ta : 'center',
    textTransform: props.tt ? props.tt : 'none',
    // width: props.w ? props.w : 'auto',
    // width: props.w && props.w !== "auto" ? props.w : "auto",
    alignSelf: props.as ? props.as : 'center',
    paddingVertical: (props.pv && props.pv) || 2,
    paddingHorizontal: (props.ph && props.ph) || 2,
    marginVertical: (props.mv && props.mv) || 2,
    marginHorizontal: (props.mh && props.mh) || 2,
    // padding: props.p ? props.p : "auto",
    // margin: props.m ? props.m : "auto",
  };
  return (
    <Text style={text} {...props}>
      {props.children}
    </Text>
  );
}
