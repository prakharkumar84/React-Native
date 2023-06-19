/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [randomBG, setRandomBG] = useState('#000000');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBG(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBG} />
      <View style={[styles.container, {backgroundColor: randomBG}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.btn}>
            <Text style={styles.btnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  btnTxt: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

export default App;
