import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { API_KEY } from "@env";
import {
  getDataFromTrello,
  createBoard,
  updateBoard,
  deleteBoard,
} from "../../../util/api/trelloFunctions";
import Slider from "../../../components/UI/Slider";
import BoardsItems from "./components/BoardsItems";
import IconButton from "../../../components/UI/Buttons/IconButton";
import { UserContext } from "../../../context/userContext";
import RegularText from "../../../components/Text/RegularText";
import { colors } from "../../../styles/colors";
import LineBreak from "../../../components/UI/Breaks/LineBreak";
import MainContainer from "../../../components/UI/Containers/MainContainer";
import InputIcon from "../../../components/UI/InputIcon";
import { getNavigationOptions } from "../../../util/navigationOptions";
import Break from "../../../components/UI/Breaks/Break";

const Boards = ({ navigation }) => {
  //STATE
  const { user, handleLogout } = useContext(UserContext);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [boards, setBoards] = useState([]);
  //FUNCTIONS
  const setNavigationOptions = () =>
    getNavigationOptions({
      title: "Boards",
      headerRight: () => (
        <IconButton name="plus" onPress={handleInputVisibility} />
      ),
      headerLeft: () => (
        <IconButton tc="white" text="Log Out" onPress={handleLogout} />
      ),
      navigation,
    });

  function handleInputVisibility() {
    setIsInputVisible((prev) => (prev = !prev));
  }

  const fetchBoards = async (signal = false) => {
    const url = `https://api.trello.com/1/members/${user.id}/boards?key=${API_KEY}&token=${user.token}`;
    const response = await getDataFromTrello(url, signal);
    setBoards((prev) => (prev = response));
    return response;
  };

  useEffect(() => {
    setNavigationOptions();
    const controller = new AbortController();
    const { signal } = controller;
    const url = `https://api.trello.com/1/members/${user.id}/boards?key=${API_KEY}&token=${user.token}`;
    getDataFromTrello(url, signal)
      .then((data) => {
        setBoards((prev) => (prev = data));
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("Abort fetchBoards");
      controller.abort();
    };
  }, []);

  const handleAddNewBoard = async () => {
    if (inputText.current === "") return;
    createBoard({
      boardName: inputText,
      token: user.token,
      func: fetchBoards,
    });
    setInputText((prev) => (prev = ""));
    handleInputVisibility();
  };
  const handleUpdateBoardName = (
    boardID,
    editBoardName,
    handleModalVisible
  ) => {
    updateBoard(boardID, editBoardName, user.token).then((res) => {
      if (res !== 200) return;
      fetchBoards();
      handleModalVisible();
    });
  };
  const handleDeleteBoard = async (boardId, handleModalVisible) => {
    deleteBoard(boardId, user.token)
      .then((res) => {
        if (res !== 200) return;
        fetchBoards();
        handleModalVisible();
      })
      .catch((err) => console.error("ERROR", err));
  };

  const onChangeText = (text) => {
    setInputText(text);
  };
  return (
    <MainContainer>
      <View style={styles.header}>
        <RegularText fw="bold" as="flex-start">
          {user?.fullName}
        </RegularText>
      </View>
      <Slider direction="column">
        <View style={styles.container}>
          {isInputVisible && (
            <View style={{ width: "90%", marginVertical: 10 }}>
              <InputIcon
                placeholder="+ Add a Board"
                onChangeText={onChangeText}
                onPress={handleAddNewBoard}
                defaultValue={inputText}
              />
            </View>
          )}
          <Break />
          {boards.map((board) => (
            <View style={{ flex: 1 }} key={board.id}>
              <BoardsItems
                {...{
                  board,
                  handleUpdateBoardName,
                  handleDeleteBoard,
                  navigation,
                  fetchBoards,
                }}
                token={user.token}
              />
              <LineBreak w="80%" bc={colors.white} />
            </View>
          ))}
        </View>
      </Slider>
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryDark80,
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.black,
  },
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    // width: '80%',
  },
  gradient: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
  touchable: {
    display: "flex",
    padding: 10,
    margin: 10,
    minWidth: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignItems: "center",
    elevation: 3,
  },
});
export default Boards;
