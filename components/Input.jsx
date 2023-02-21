import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {themeStyle} from '../styles/defaultSyles';

const Input = ({onChangeText, ...props}) => {
  return (
    <TextInput
      style={styles.textInput}
      {...props}
      onChangeText={text => onChangeText(text)}></TextInput>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    flex: 1,
    textAlign: 'center',
  },
});
export default Input;
