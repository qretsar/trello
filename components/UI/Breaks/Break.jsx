import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Break = props => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 1,
      marginVertical: props.mv ? props.mv : 5,
    },
  });

  return <View style={styles.container}></View>;
};

export default Break;
