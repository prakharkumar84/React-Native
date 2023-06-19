import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

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
  onClose: () => void;
  myArray: Todo[];
  addItemToArray: (item: Todo) => void;
  check: Boolean;
  board: Board[];
  addBoardItem: (item: Board) => void;
}

const PopupPage: React.FC<ComponentProps> = ({
  onClose,
  myArray,
  addItemToArray,
  check,
  board,
  addBoardItem,
}) => {
  const [headerInput, setHeaderInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const [docInput, setDOCInput] = useState('');
  const [docInputNew, setDOCInputNew] = useState(new Date());
  const [boardInput, setboardInput] = useState('');

  const handleSubmit = () => {
    if (headerInput.trim() === '') return;
    if (titleInput.trim() === '') return;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    setDOCInput(formattedDate);
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000).toString(),
      header: headerInput,
      title: titleInput,
      time: timeInput,
      desc: descInput,
      doc: docInput,
    };
    console.log('new item');
    console.log(newTodo);
    addItemToArray(newTodo);
  };
  const handleBoardSubmit = () => {
    if (boardInput.trim() === '') return;
    console.log(docInputNew);
    const newTodo: Board = {
      id: Math.floor(Math.random() * 1000).toString(),
      header: boardInput,
      date: docInputNew.toLocaleDateString(),
    };
    console.log(newTodo);
    addBoardItem(newTodo);
  };

  return (
    <>
      {!check ? (
        <View style={styles.Container}>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn1} onPress={handleSubmit}>
              <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={onClose}>
              <Text style={styles.btntxt}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textblock}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={headerInput}
                dropdownIconColor="red"
                onValueChange={headerInput => setHeaderInput(headerInput)}>
                {board.map((item, index) => (
                  <Picker.Item
                    key={index}
                    label={item.header}
                    value={item.header}
                  />
                ))}
              </Picker>
            </View>
            <TextInput
              style={styles.textContainer}
              value={titleInput}
              onChangeText={titleInput => setTitleInput(titleInput)}
              placeholder="Enter Task Title"
              placeholderTextColor="black"></TextInput>
            <TextInput
              style={styles.textContainer}
              value={timeInput}
              onChangeText={timeInput => setTimeInput(timeInput)}
              placeholder="Enter Estimated Time"
              placeholderTextColor="black"></TextInput>
            <TextInput
              style={styles.textContainer}
              value={descInput}
              multiline={true}
              onChangeText={descInput => setDescInput(descInput)}
              placeholder="Enter Task Description"
              placeholderTextColor="black"></TextInput>
          </View>
          <View style={styles.chill}></View>
        </View>
      ) : (
        <View style={styles.Container}>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn1} onPress={handleBoardSubmit}>
              <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={onClose}>
              <Text style={styles.btntxt}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textblock}>
            <TextInput
              style={styles.textContainer}
              value={boardInput}
              onChangeText={boardInput => setboardInput(boardInput)}
              placeholder="Enter Task Group"
              placeholderTextColor="black"></TextInput>
          </View>
          <View style={styles.chill}></View>
        </View>
      )}
    </>
  );
};

export default PopupPage;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FEF970',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  btn1: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 10,
    backgroundColor: 'black',
    marginTop: 5,
  },
  btn2: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: 'black',
    marginTop: 5,
  },
  btntxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  textblock: {
    marginLeft: 20,
    marginRight: 20,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    marginBottom: 5,
    paddingLeft: 20,
  },
  chill: {
    height: Dimensions.get('window').height / 1,
  },
  pickerContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 5,
    paddingLeft: 10,
  },
  dateContainer: {
    borderWidth: 1,
    borderColor: '#5E8AFF',
    borderRadius: 10,
    marginBottom: 5,
    paddingLeft: 20,
  },
});
