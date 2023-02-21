import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {themeStyle} from '../../../styles/defaultSyles';
import RegularText from '../../Text/RegularText';
import {colors} from '../../../styles/colors';

const IconButton = ({name, ...props}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: props.fd ? props.fd : 'row',
      alignItems: 'center',
      ...themeStyle.borderRadius,
      ...themeStyle.shadow,
      backgroundColor: props.bc && props.bc,
      // padding: props.p ? props.p : 5,
      // paddingVertical: props.pv && props.pv,
      // paddingHorizontal: props.ph && props.ph,
    },
    icon: {
      // marginRight: props.fd === 'row' ? 5 : 10,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      disabled={props.disabled ? props.disabled : false}>
      {name && (
        <Icon
          name={name}
          size={props.size ? props.size : 20}
          color={props.ic ? props.ic : colors.primaryBright}
          style={styles.icon}
        />
      )}
      {props.text && (
        <RegularText
          fw="bold"
          tc={props.tc ? props.tc : colors.primaryDark}
          mt={0}>
          {props.text}
        </RegularText>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
