import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const InputIcon = ({...props}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 5,
      borderRadius: 5,
      width: props.width ? props.width : '100%',
    },

    input: {
      flex: 1,
      marginRight: 10,
      padding: 5,
      textAlign: 'center',
      backgroundColor: 'white',
    },
  });
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} autoCompleteType="off" {...props} />

      <TouchableOpacity {...props}>
        <Icon
          name={props.icon ? props.icon : 'plus'}
          size={20}
          color={colors.primaryDark}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputIcon;
