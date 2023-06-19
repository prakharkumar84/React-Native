import React from 'react';

import {View, Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';

function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.view}>
        <View style={styles.align}>
          <Text style={styles.text1}>User:</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="User"></TextInput>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.align}>
          <Text style={styles.text1}>Password:</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Password"></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 20,
    width: 200,
    borderWidth: 1,
    margin: 12,
  },
  username: {
    display: 'flex',
    flexDirection: 'column',
  },
  view: {
    flex: 1,
    flexDirection: 'row',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  align: {},
});
export default App;
