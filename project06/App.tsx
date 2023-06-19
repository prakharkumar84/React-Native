import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const data = [
    {id: 1, content: 'AC'},
    {id: 2, content: '+/-'},
    {id: 3, content: '%'},
    {id: 4, content: '/'},
    {id: 5, content: '7'},
    {id: 6, content: '8'},
    {id: 7, content: '9'},
    {id: 8, content: '*'},
    {id: 9, content: '4'},
    {id: 10, content: '5'},
    {id: 11, content: '6'},
    {id: 12, content: '-'},
    {id: 13, content: '1'},
    {id: 14, content: '2'},
    {id: 15, content: '3'},
    {id: 16, content: '+'},
    {id: 17, content: '0'},
    {id: 18, content: '.'},
    {id: 19, content: '='},
    {id: 20, content: 'D'},
  ];
  const [result, setResult] = useState<string>('0');
  const [expression, setExpression] = useState<string>('');

  const handleNumberPress = (number: string): void => {
    if (result === '0') {
      setResult(number);
    } else {
      setResult(result + number);
    }
  };

  const handleOperatorPress = (operator: string): void => {
    setExpression(expression + result + operator);
    setResult('0');
  };

  const handlePress = ({item}: any) => {
    if (item.id === 13) {
      handleNumberPress('1');
    }
    if (item.id === 14) {
      handleNumberPress('2');
    }
    if (item.id === 15) {
      handleNumberPress('3');
    }
    if (item.id === 9) {
      handleNumberPress('4');
    }
    if (item.id === 10) {
      handleNumberPress('5');
    }
    if (item.id === 11) {
      handleNumberPress('6');
    }
    if (item.id === 5) {
      handleNumberPress('7');
    }
    if (item.id === 6) {
      handleNumberPress('8');
    }
    if (item.id === 7) {
      handleNumberPress('9');
    }
    if (item.id === 17) {
      handleNumberPress('0');
    }
    if (item.id === 1) {
      setResult('0');
      setExpression('');
    }
    if (item.id === 3) {
      handleOperatorPress('%');
    }
    if (item.id === 4) {
      handleOperatorPress('/');
    }
    if (item.id === 8) {
      handleOperatorPress('*');
    }
    if (item.id === 12) {
      handleOperatorPress('-');
    }
    if (item.id === 16) {
      handleOperatorPress('+');
    }
    if (item.id === 18) {
      handleNumberPress('.');
    }
    if (item.id === 19) {
      setExpression(expression + result);
      const calculatedResult = eval(expression + result);
      if (Number.isInteger(calculatedResult)) {
        setResult(calculatedResult.toString());
        setExpression('');
      } else {
        var numb = calculatedResult;
        numb = numb.toFixed(4);
        setResult(numb.toString());
        setExpression('');
      }
    }
    if (item.id === 20) {
      let length = result.length;
      let x = result.slice(0, length - 1);
      if (x === '') {
        setResult('0');
      } else {
        setResult(x);
      }
    }
    if (item.id === 2) {
      if (parseInt(result, 16) < 0) {
        let length = result.length;
        let x = result.slice(1, length);
        setResult(x);
      } else {
        setResult('-' + result);
      }
    }
  };
  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handlePress({item})}>
        <View style={styles.boxes}>
          <Text style={styles.title}>{item.content}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.main}>
      <View style={styles.Navbar}>
        <Text style={styles.header}>Calculator</Text>
      </View>
      <View style={styles.screen}>
        <Text style={styles.screenText}>{result}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={4}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  Navbar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FF9F0A',
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
  },
  item: {
    margin: 13,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  screen: {
    backgroundColor: 'black',
    height: Dimensions.get('window').height / 3.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  screenText: {
    color: 'white',
    marginRight: 40,
    fontWeight: '200',
    fontSize: 50,
  },
  boxes: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').height / 12,
    borderRadius: 30,
    backgroundColor: '#343434',
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
