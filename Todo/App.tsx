import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

interface Todo {
  id: string;
  text: string;
}
const App = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (input.trim() === '') {
      return;
    }

    const newTodo: Todo = {
      id: Math.random().toString(),
      text: input,
    };
    setTodo(prevTodos => [...prevTodos, newTodo]);
    setInput('');
  };

  const handleDeleteTodo = (id: string) => {
    setTodo(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <View style={styles.card}>
        <Text style={styles.header}>Practice</Text>
      </View>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.textcontainer}
            value={input}
            onChangeText={text => setInput(text)}
            placeholder="Enter a task"
            keyboardType="default"
          />

          <Button title="Add" onPress={handleAddTodo} />
        </View>
        <FlatList
          data={todo}
          renderItem={({item}) => (
            <View style={styles.todoContainer}>
              <View style={styles.textContainer}>
                <Text>{item.text}</Text>
              </View>
              <Button
                title="Delete"
                onPress={() => handleDeleteTodo(item.id)}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    padding: 16,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  textcontainer: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#bfc9c9',
    color: 'black',
  },
  card: {
    backgroundColor: '#5f10ad',
    elevation: 5,
    height: 50,
  },
  header: {
    padding: 10,
    color: 'white',
    fontSize: 24,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: 'skyblue',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 10,
  },
  textContainer: {
    width: Dimensions.get('window').width / 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginStart: 20,
  },
});
