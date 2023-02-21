import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { createNewList, getLists } from "../../../util/api/trelloFunctions";
import { API_KEY } from "@env";
import Card from "./components/Card";
import Slider from "../../../components/UI/Slider";
import { UserContext } from "../../../context/userContext";
import MainContainer from "../../../components/UI/Containers/MainContainer";
import IconButton from "../../../components/UI/Buttons/IconButton";
import InputIcon from "../../../components/UI/InputIcon";
import { getNavigationOptions } from "../../../util/navigationOptions";
import Break from "../../../components/UI/Breaks/Break";

const Board = ({ route, navigation }) => {
  const { user } = useContext(UserContext);
  const { name, boardId } = route.params;
  const [lists, setLists] = useState([]);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  console.log(API_KEY);
  //FUNCTIONS
  const setNavigationOptions = () =>
    getNavigationOptions({
      title: name,
      headerRight: () => (
        <IconButton
          name={isInputVisible ? "minus" : "plus"}
          onPress={handleInputVisibility}
        />
      ),
      headerLeft: () => (
        <>
          <IconButton
            tc="white"
            name="arrow-left"
            onPress={() => navigation.goBack()}
          />
        </>
      ),
      navigation,
    });
  function handleInputVisibility() {
    setIsInputVisible((prev) => (prev = !prev));
  }
  const fetchLists = async () => {
    try {
      const data = await getLists(boardId, API_KEY, user.token);
      setLists((prev) => (prev = data));
    } catch (error) {
      console.log("ERROR FETCHING LISTS", error);
    }
  };
  useEffect(() => {
    console.log("BOARD BOARD ");
    setNavigationOptions();
    fetchLists();
  }, []);
  const onChangeText = (text) => {
    setInputText((prev) => (prev = text));
  };
  const handleCreateNewList = async (params) => {
    if (inputText.length === 0) return;
    createNewList(boardId, inputText, user.token).then((res) => {
      if (res !== 200) return;
      fetchLists();
      setInputText((prev) => (prev = ""));
      setIsInputVisible((prev) => (prev = false));
    });
  };
  return (
    <MainContainer>
      {isInputVisible && (
        <>
          <Break />
          <InputIcon
            name="plus"
            placeholder="Add a xlist"
            onChangeText={onChangeText}
            width="90%"
            onPress={handleCreateNewList}
          />
        </>
      )}

      <Slider direction="row">
        {lists &&
          lists.map((list) => {
            return (
              <Card
                key={list.id}
                list={list}
                token={user.token}
                fetchLists={fetchLists}
              />
            );
          })}
      </Slider>
    </MainContainer>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
