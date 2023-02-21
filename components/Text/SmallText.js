import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import {colors} from '../../styles/colors';

export default function SmallText(props) {
  const text = {
    fontSize: props.fs ? props.fs : 12,
    fontWeight: props.fw ? props.fw : 'normal',
    color: props.color || props.tc ? props.color || props.tc : colors.white,
    textAlign: props.ta ? props.ta : 'center',
    textTransform: props.tt ? props.tt : 'none',
    paddingVertical: props.pv ? props.pv : 2,
    paddingHorizontal: props.ph ? props.ph : 5,
    alignSelf: props.as ? props.as : 'stretch',
  };

  return (
    <Text style={text} {...props}>
      {props.children}
    </Text>
  );
}
