import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {themeStyle} from '../../styles/defaultSyles';
import {colors} from '../../styles/colors';

const CustomButton = ({title, ...props}) => {
  //   console.log();
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      //   height: 25,
      // width: '50%',
      marginHorizontal: props.mh ? props.mh : 10,
      marginVertical: props.mv ? props.mv : 1,
      paddingHorizontal: props.ph ? props.ph : 10,
      paddingVertical: props.pv
        ? props.pv
        : themeStyle.padding.paddingVertical.paddingVertical,
      borderRadius: 5,
      backgroundColor: props.bc ? props.bc : colors.primaryDark,
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    title: {
      color: props.c ? '#FFFFFF' : '#000000',
      color: colors.white,
      fontWeight: 'bold',
    },
  });
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
