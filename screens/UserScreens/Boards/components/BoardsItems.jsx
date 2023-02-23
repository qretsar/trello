import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import IconButton from "../../../../components/UI/Buttons/IconButton";
import { themeStyle } from "../../../../styles/defaultSyles";
import { colors } from "../../../../styles/colors";
import RegularText from "../../../../components/Text/RegularText";
import { EditField } from "../../../../components/EditField/EditField";
import GlobalModal from "../../../../components/Modals/GlobalModal";

const BoardsItems = ({
  board,
  navigation,
  handleDeleteBoard,
  handleUpdateBoardName,
}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [editBoardName, setEditBoardName] = React.useState(board.name);
  const onChangeText = (text) => {
    setEditBoardName(text);
  };
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {modalVisible && (
        <GlobalModal {...{ modalVisible, setModalVisible }}>
          <EditField
            {...{
              fieldId: board.id,
              updatedValue: editBoardName,
              onChangeText,
              handleModalVisible,
              defaultValue: board.name,
              updateField: handleUpdateBoardName,
              deleteField: handleDeleteBoard,
            }}
          />
        </GlobalModal>
      )}
      <View style={styles.container}>
        <View style={styles.image}></View>
        <TouchableOpacity
          style={styles.content}
          onLongPress={() => handleDeleteBoard(board.id, handleModalVisible)}
          onPress={() =>
            navigation.navigate("Board", {
              boardId: board.id,
              name: board.name,
            })
          }
        >
          <RegularText ta="left" as="flex-start">
            {board?.name}
          </RegularText>
        </TouchableOpacity>
        {/* <CustomButton onPress={() => setModalVisible(true)} title="Edit" /> */}

        <IconButton
          name="edit"
          onPress={() => setModalVisible(true)}
          size={15}
        />
      </View>
    </>
  );
};

export default BoardsItems;

const styles = StyleSheet.create({
  image: {
    display: "flex",
    backgroundColor: colors.primary,
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 3,
  },
  container: {
    display: "flex",
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    margin: 1,
    minWidth: "90%",
    borderRadius: 5,
  },
  content: {
    flex: 1,
    alignItems: "center",
    ...themeStyle.padding.paddingVertical,
  },
});
