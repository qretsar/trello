import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RowContainer = ({children, ...props}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: props.w ? props.w : '100%',
      height: props.h && props.h,
      justifyContent: props.jc ? props.jc : 'center',
      marginVertical: props.mv ? props.mv : 1,
      // margin: props.m && props.m,
      padding: props.p && props.p,
      backgroundColor: props.bc && props.bc,
    },
  });
  return <View style={styles.container}>{children}</View>;
};

export default RowContainer;
