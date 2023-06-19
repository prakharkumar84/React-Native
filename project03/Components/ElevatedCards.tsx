import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  const Card =()=>{
    return (
      <View style={[styles.card, styles.ecard]}>
        <Text>Tap</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.flatcard}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </ScrollView>
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
    color: 'brown',
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
  ecard: {
    backgroundColor: 'lightblue',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
    elevation: 4,
  },
});
