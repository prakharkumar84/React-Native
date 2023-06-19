import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PopupPage from './PopupPage';

interface Todo {
  id: string;
  header: string;
  title: string;
  time: string;
  desc: string;
  doc: string;
}
interface Board {
  id: string;
  header: string;
  date: string;
}
interface ComponentProps {
  myArray: Todo[];
  addItemToArray: (item: Todo) => void;
  check: Boolean;
  board: Board[];
  addBoardItem: (item: Board) => void;
}

const Plus: React.FC<ComponentProps> = ({
  myArray,
  addItemToArray,
  check,
  board,
  addBoardItem,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const handlePopUp = () => {
    setIsPopupOpen(true);
  };
  return (
    <>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerContainer} onPress={handlePopUp}>
          <Text style={styles.footertext}>+</Text>
        </TouchableOpacity>
      </View>
      {isPopupOpen && (
        <PopupPage
          onClose={closePopup}
          myArray={myArray}
          addItemToArray={addItemToArray}
          check={check}
          board={board}
          addBoardItem={addBoardItem}
        />
      )}
    </>
  );
};

export default Plus;

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    backgroundColor: '#111C2F',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#5E8AFF',
    height: 60,
    width: 60,
    alignItems: 'center',
    borderRadius: 30,
    zIndex: 1,
    marginBottom: 20,
  },
  footertext: {
    color: 'white',
    fontSize: 30,
  },
});
