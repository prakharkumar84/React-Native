import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type BtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = ({name, flag}: BtnProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: 'white',
    marginBottom: 4,
  },
  name: {
    fontSize: 12,
    color: '#2D3436',
    marginBottom: 4,
  },
});
