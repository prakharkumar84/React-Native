import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';

function App() {
  const [count, setCount] = useState(0);
  const [buttonClick, setButtonClick] = useState(false);

  const handleStartPress = () => {
    setButtonClick(true);
  };
  const handleStopPress = () => {
    setButtonClick(false);
  };
  const handleReset = () => {
    setCount(0);
    setButtonClick(false);
  };

  useEffect(() => {
    if (buttonClick) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [buttonClick]);

  return (
    <View style={styles.main}>
      <View style={styles.nav}>
        <Text style={styles.navText}>Counter</Text>
      </View>
      <ScrollView>
        <View style={styles.screen}>
          <View style={styles.count}>
            <Text style={styles.title}>{count}</Text>
          </View>

          <View style={styles.button}>
            <Button title="Start" onPress={handleStartPress} />
            <Button title="Stop" onPress={handleStopPress} />
            <Button title="Reset" onPress={handleReset} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  navText: {
    fontSize: 20,
    fontWeight: '500',
    margin: 5,
    color: 'black',
  },
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  count: {
    height: Dimensions.get('window').height / 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    elevation: 5,
    width: Dimensions.get('window').width / 2,
    marginBottom: 50,
    backgroundColor: 'white',
  },
  title: {
    color: 'blue',
    fontSize: 50,
    fontWeight: '400',
  },
  button: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default App;
