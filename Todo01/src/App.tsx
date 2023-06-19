import React, {useState} from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import GoodMorning from './Components/GoodMorning';
import Navbar from './Components/Navbar';
import Tasks from './Components/Tasks';
import Plus from './Components/Plus';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import About from './Components/About';
import Notifications from './Components/Notifications';
const Stack = createStackNavigator();
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


const App = () => {
  const [dataActive, setActiveData] = useState<Todo[]>([]);
  const [dataDone, setDoneData] = useState<Todo[]>([]);
  const [hide, setHide] = useState<Boolean>(false);
  const [isBoard, setIsBoard] = useState<Boolean>(false);
  const [board, setBoard] = useState<Board[]>([]);

  const addItemToArray = (item: Todo) => {
    setActiveData(prevArray => [...prevArray, item]);
  };
  const addBoardItem = (item: Board) => {
    setBoard(prevArray => [...prevArray, item]);
    console.log(board);
  };
  const handleAddDone = (item: Todo) => {
    setDoneData(prevArray => [...prevArray, item]);
  };
  const handleDeleteTodo = (id: string) => {
    setActiveData(prevArray => prevArray.filter(todo => todo.id !== id));
  };
  const handleDeleteBoard = (id: string) => {
    setBoard(prevArray => prevArray.filter(todo => todo.id !== id));
  };
  const handleHide = (value: Boolean) => {
    setHide(value);
  };
  const handleISBoard = (value: Boolean) => {
    setIsBoard(value);
  };

  return (
    <>
      
      <Navbar/>
      {!hide && (
        <GoodMorning lenActive={dataActive.length} lenDone={dataDone.length} />
      )}
      <Tasks
        doneProps={dataDone}
        props={dataActive}
        handleAddDone={handleAddDone}
        handleDeleteTodo={handleDeleteTodo}
        handleHide={handleHide}
        handleISBoard={handleISBoard}
        board={board}
        handleDeleteBoard={handleDeleteBoard}
      />

      <Plus
        myArray={dataActive}
        addItemToArray={addItemToArray}
        check={isBoard}
        board={board}
        addBoardItem={addBoardItem}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  scroll: {
    height: 0,
    borderWidth: 2,
    borderColor: 'red',
  },
});
