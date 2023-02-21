import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataFromAsyncStorage = async name => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteDataFromAsyncStorage = async name => {
  try {
    await AsyncStorage.removeItem(name);
    console.log('Data deleted from AsyncStorage');
  } catch (error) {
    console.log(error);
  }
};
