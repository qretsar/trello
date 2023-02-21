import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';

export default function RegularText({...props}) {
  const text = {
    fontSize: props.fs ? props.fs : 15,
    fontWeight: props.fw ? props.fw : 'normal',
    color: props.color || props.tc ? props.color || props.tc : colors.white,
    textAlign: props.ta ? props.ta : 'center',
    textTransform: props.tt ? props.tt : 'none',
    width: props.w ? props.w : 'auto',
    alignSelf: props.as ? props.as : 'center',
    margin: props.m ? props.m : 0,
    marginVertical: props.mv && props.mv,
    marginHorizontal: props.mh && props.mh,
    marginTop: props.mt && props.mt,
    marginBottom: props.mb && props.mb,
    //Background color is for testing purposes only
    backgroundColor: props.bc ? props.bc : 'transparent',
  };
  return (
    <Text style={text} {...props}>
      {props.children}
    </Text>
  );
}
