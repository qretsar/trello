import {TextInput, View} from 'react-native';
import {colors} from '../../styles/colors';
import {themeStyle} from '../../styles/defaultSyles';
import LineBreak from '../UI/Breaks/LineBreak';
import RowContainer from '../UI/Containers/RowContainer';
import CustomButton from '../UI/CustomButton';

export const EditField = ({
  fieldId,
  updatedValue,
  defaultValue,
  onChangeText,
  handleModalVisible,
  updateField,
  deleteField,
}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <TextInput
        defaultValue={defaultValue}
        {...{onChangeText}}
        style={themeStyle.input}
        autoComplete="off"
      />
      <LineBreak />
      <RowContainer mv={10}>
        <CustomButton
          onPress={handleModalVisible}
          title="Cancel"
          bc={colors.background}
        />
        <CustomButton
          onPress={() => updateField(fieldId, updatedValue, handleModalVisible)}
          title="Update"
          bc={colors.green}
        />
        <CustomButton
          onPress={() => deleteField(fieldId, handleModalVisible)}
          title="Delete"
          bc={colors.red}
        />
      </RowContainer>
    </View>
  );
};
