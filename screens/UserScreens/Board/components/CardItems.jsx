import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../../../../context/userContext';
import GlobalModal from '../../../../components/Modals/GlobalModal';
import {deleteCard, updateCard} from '../../../../util/api/trelloFunctions';
import {EditField} from '../../../../components/EditField/EditField';
const CardItems = ({card, FetchCards}) => {
  const {user} = useContext(UserContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [editCardName, setEditCardName] = React.useState(card.name);
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  const handleDeleteCard = async (cardId, handleModalVisible) => {
    deleteCard(cardId, user.token)
      .then(res => {
        console.log('REsponse from delete card: ', res);
        if (res === 200) {
          handleModalVisible();
          FetchCards();
          console.log('card deleted');
        }
      })
      .catch(err => {
        console.log('delete card', err);
      });
  };
  const handleUpdateCard = async (cardId, updatedValue, handleModalVisible) => {
    updateCard(cardId, updatedValue, user.token)
      .then(res => {
        if (res === 200) {
          handleModalVisible();
          FetchCards();
          console.log('card updated');
        }
      })
      .catch(err => {
        console.log('update card', err);
      });
  };

  return (
    <>
      <GlobalModal modalVisible={modalVisible}>
        <EditField
          {...{
            fieldId: card.id,
            updatedValue: editCardName,
            onChangeText: text => {
              setEditCardName(text);
            },
            handleModalVisible,
            defaultValue: card.name,
            updateField: handleUpdateCard,
            deleteField: handleDeleteCard,
          }}
        />
      </GlobalModal>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}>
        <Text>{card?.name}</Text>
      </TouchableOpacity>
    </>
  );
};

export default CardItems;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
