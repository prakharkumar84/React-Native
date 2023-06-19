import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

const App = () => {
  const [bg, setBG] = useState<string[]>([]);
  const myArray = useRef<string[]>([]);
  const generatecolor = () => {
    const hexrange = '0123456789ABCDEF';
    let color = '#';
    let j = 0;
    setBG([]);
    myArray.current = [];
    while (j < 9) {
      color = '#';
      for (let i = 0; i < 6; i++) {
        color += hexrange[Math.floor(Math.random() * 16)];
      }
      myArray.current.push(color);
      j += 1;
    }
    setBG(myArray.current);
  };
  const generateNewcolor = (index: number) => {
    const hexrange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexrange[Math.floor(Math.random() * 16)];
    }
    myArray.current[index] = color;
    setBG(myArray.current);
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.main}>
          <View>
            <Text style={styles.txt}>Color Changer</Text>
          </View>
          <View style={styles.container}>
            <View style={[styles.square, {backgroundColor: bg[0]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(0)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.circle, {backgroundColor: bg[1]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(1)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.square, {backgroundColor: bg[2]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(2)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View style={[styles.circle, {backgroundColor: bg[3]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(3)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.square, {backgroundColor: bg[4]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(4)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.circle, {backgroundColor: bg[5]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(5)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View style={[styles.square, {backgroundColor: bg[6]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(6)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.circle, {backgroundColor: bg[7]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(7)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.square, {backgroundColor: bg[8]}]}>
              <TouchableOpacity onPress={() => generateNewcolor(8)}>
                <View style={styles.btn1}>
                  <Text style={styles.btnTxt1}>Press Me</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={generatecolor}>
            <View style={styles.btn}>
              <Text style={styles.btnTxt}>Press Me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 5,
  },
  circle: {
    borderRadius: 120,
    elevation: 5,
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 3.5,
    margin: 5,
    flexShrink: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    borderRadius: 20,
    elevation: 5,
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 3,
    flexShrink: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  btnTxt: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  btn1: {
    borderRadius: 16,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    elevation: 5,
  },
  btnTxt1: {
    color: 'white',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
