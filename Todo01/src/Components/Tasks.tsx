import React, {useState} from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import Container from './Container';
import Boards from './Boards';

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
interface MyComponentProps {
  doneProps: Todo[];
  props: Todo[];
  handleAddDone: (item: Todo) => void;
  handleDeleteTodo: (id: string) => void;
  handleHide: (value: Boolean) => void;
  handleISBoard: (value: Boolean) => void;
  board: Board[];
  handleDeleteBoard: (id: string) => void;
}
const Tasks: React.FC<MyComponentProps> = ({
  doneProps,
  props,
  handleAddDone,
  handleDeleteTodo,
  handleHide,
  handleISBoard,
  board,
  handleDeleteBoard,
}) => {
  const [istaskactive, setIsTaskActive] = useState(true);
  const [isboardsactive, setIsBoardsActive] = useState(false);

  const handleTaskPress = () => {
    handleISBoard(false);
    setIsBoardsActive(false);
    setIsTaskActive(true);
  };
  const handleBoardPress = () => {
    handleHide(true);
    handleISBoard(true);
    setIsTaskActive(false);
    setIsBoardsActive(true);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.taskContainer}>
        <View style={styles.Header}>
          <View style={styles.Header1}>
            <View style={istaskactive ? styles.digitPress : styles.digit}>
              <Text
                style={istaskactive ? styles.digitTextPress : styles.digitText}>
                {props.length}
              </Text>
            </View>
            <Pressable onPress={handleTaskPress}>
              <Text style={styles.HeaderTaskText}>Tasks</Text>
            </Pressable>
          </View>
          <View style={styles.Header1}>
            <View style={isboardsactive ? styles.digitPress : styles.digit}>
              <Text
                style={
                  isboardsactive ? styles.digitTextPress : styles.digitText
                }>
                {board.length}
              </Text>
            </View>
            <Pressable onPress={handleBoardPress}>
              <Text selectable={false} style={styles.HeaderTaskText}>
                Boards
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.bar}>
          <View style={istaskactive ? styles.bar1 : styles.bar2}></View>
          <View style={isboardsactive ? styles.bar1 : styles.bar2}></View>
        </View>
      </View>
      {istaskactive && (
        <Container
          doneProps={doneProps}
          props={props}
          handleAddDone={handleAddDone}
          handleDeleteTodo={handleDeleteTodo}
          handleHide={handleHide}
        />
      )}
      {isboardsactive && (
        <Boards
          board={board}
          handleDeleteBoard={handleDeleteBoard}
          props={props}
        />
      )}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#111C2F',
  },
  taskContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  Header1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digit: {
    backgroundColor: '#111C2F',
    borderRadius: 15,
    paddingHorizontal: 5,
    height: 20,
    marginRight: 5,
    borderColor: 'white',
    borderWidth: 1,
  },
  digitPress: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 5,
    height: 20,
    marginRight: 5,
    borderColor: 'white',
  },
  digitText: {
    color: 'white',
  },
  digitTextPress: {
    color: 'black',
  },
  HeaderTaskText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '200',
  },
  bar: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar1: {
    width: '50%',
    height: 5,
    backgroundColor: 'white',
  },
  bar2: {
    width: '50%',
    height: 5,
    backgroundColor: 'grey',
  },
});
