import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.flatcard}>FancyCards</Text>
      <View style={[styles.card, styles.ecard]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.img}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Nature</Text>
          <Text style={styles.cardLabel}>Netherlands</Text>
          <Text style={styles.cardDesc}>
            Nature, in the broadest sense, is equivalent to the natural
            world,physical world, or material world. "Nature" refers to the
            phenomena of the physical world, and also to life in general. It
            ranges in scale from the subatomic to the cosmic.
          </Text>
          <View style={styles.cardAuthor}>
            <Text style={styles.cardFooter}>-Prakhar Kumar</Text>
          </View>
        </View>
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
    color: 'brown',
  },
  card: {
    width: 350,
    height: 'auto',
    borderRadius: 6,
    marginStart: 30,
    borderColor: 'grey',
  },
  ecard: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  img: {
    height: 200,
    borderRadius: 5,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 6,
  },
  cardLabel: {
    color: '#282726',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDesc: {
    color: '#282726',
    fontSize: 12,
    marginBottom: 6,
    flexShrink: 1,
  },

  cardFooter: {
    color: '#282726',
    marginBottom: 6,
    fontSize: 12,
  },
  cardAuthor: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
