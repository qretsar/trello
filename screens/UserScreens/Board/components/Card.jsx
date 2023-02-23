import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CardItems from "./CardItems";
import { API_KEY } from "@env";
import {
  getDataFromTrello,
  createNewCard,
  deleteList,
} from "../../../../util/api/trelloFunctions";
import IconButton from "../../../../components/UI/Buttons/IconButton";
import InputIcon from "../../../../components/UI/InputIcon";
import { colors } from "../../../../styles/colors";
import LineBreak from "../../../../components/UI/Breaks/LineBreak";
const { width } = Dimensions.get("window");
const Card = ({ list, token, fetchLists }) => {
  //States
  const [cards, setCards] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  //Functions
  useEffect(() => {
    FetchCards();
  }, []);
  const FetchCards = async () => {
    const url = `https://api.trello.com/1/lists/${list.id}/cards?key=${API_KEY}&token=${token}`;
    const data = await getDataFromTrello(url);
    setCards((prev) => (prev = data));
  };
  const handleAddNewCard = () => {
    if (inputText === "") return;
    createNewCard(list.id, inputText, token).then((response) => {
      if (response !== 200) return;
      setInputText((prev) => (prev = ""));
      FetchCards();
      setIsInputVisible((prev) => (prev = !prev));
    });
  };
  const handleDeleteList = () => {
    deleteList(list.id, token)
      .then((response) => {
        if (response !== 200) return;
        fetchLists();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeText = (text) => {
    setInputText((prev) => (prev = text));
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.heading}>{list.name}</Text>
          <IconButton
            name="plus"
            onPress={() => setIsInputVisible((prev) => (prev = !prev))}
            ic={colors.primaryDark}
          />
        </View>
        <LineBreak w="80%" />
        {cards.map((card) => (
          <CardItems key={card.id} card={card} FetchCards={FetchCards} />
        ))}
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          {isInputVisible && (
            <InputIcon
              icon="plus"
              placeholder="Add a card"
              onChangeText={onChangeText}
              onPress={handleAddNewCard}
            />
          )}
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 5,
          right: 5,
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <IconButton
          name="ellipsis-h"
          ic={colors.primaryDark}
          onPress={() => setIsEditMode((prev) => (prev = !prev))}
        />
      </View>
      {isEditMode && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <IconButton
            name="trash-alt"
            ic={colors.primaryDark}
            onPress={handleDeleteList}
          />
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    minHeight: 500,
    width: width * 0.8,
    backgroundColor: "#EBECF0",
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#172C4D",
    marginVertical: 10,
  },
});
