import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props{
  clr:String,
  styling:object
}

export default function FlatCards() {
  const Card:React.FC<Props> = ({clr, styling}) => {
    return (
      <View style={[styles.card, styling]}>
        <Text style={styles.text}>{clr}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.flatcard}>Flat Cards</Text>
      <View style={styles.container}>
        <Card clr={'Red'} styling={styles.cardOne} />
        <Card clr={'Green'} styling={styles.cardTwo} />
        <Card clr={'Blue'} styling={styles.cardThree} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatcard: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingHorizontal: 8,
    marginTop: 10,
    padding: 8,
    color:'brown'
  },
  container: {
    fex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  text: {
    color: 'white',
  },
  cardOne: {
    backgroundColor: 'red',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardTwo: {
    backgroundColor: 'green',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardThree: {
    backgroundColor: 'blue',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
