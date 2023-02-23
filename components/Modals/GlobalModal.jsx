import { StyleSheet, View, Modal } from "react-native";
import React from "react";
import { themeStyle } from "../../styles/defaultSyles";

const GlobalModal = ({ modalVisible, setModalVisible, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

export default GlobalModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
    // backgroundColor: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: "80%",
    minHeight: "50%",
    ...themeStyle.shadow,
  },
});
