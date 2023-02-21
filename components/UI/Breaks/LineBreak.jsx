import {View} from 'react-native';
import React from 'react';
import {colors} from '../../../styles/colors';
const LineBreak = ({...props}) => {
  const container = {
    display: 'flex',
    minWidth: props.w ? props.w : '40%',
    maxHeight: props.h ? props.bw : 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomColor: props.bc ? props.bc : colors.primaryDark,
    borderBottomWidth: props.h ? props.h : 1,
    // marginHorizontal: props.mh ? props.mh : 50,
    marginVertical: props.mv ? props.mv : 5,
  };
  return <View style={container}></View>;
};

export default LineBreak;
