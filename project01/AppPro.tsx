import React from 'react';
import {View, Text, StyleSheet, useColorScheme, TextInput} from 'react-native';

function AppPro(): JSX.Element {
  const isdarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text
        style={isdarkMode ? styles.modeWhite : styles.modeBlack}
        style={styles.text}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
  },
  modeWhite: {
    color: '#FFFFFF',
  },
  modeBlack: {
    color: '#000000',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});
export default AppPro;
