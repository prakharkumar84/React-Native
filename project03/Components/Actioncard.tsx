import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Actioncard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.flatcard}>Actioncard</Text>
      <View style={[styles.card, styles.ecard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Blog Post</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.img}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={2} style={styles.cardDesc}>
            Nature, in the broadest sense, is equivalent to the natural
            world,physical world, or material world. "Nature" refers to the
            phenomena of the physical world, and also to life in general. It
            ranges in scale from the subatomic to the cosmic.
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardAuthor}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.pexels.com/search/nature/')
              }>
              <Text style={styles.cardText}>Read more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardAuthor}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.pexels.com/search/nature/')
              }>
              <Text style={styles.cardText}>Follow Me</Text>
            </TouchableOpacity>
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
    borderRadius: 6,
    width: 350,
    height: 'auto',
    marginStart: 30,
  },
  ecard: {
    backgroundColor: '#E5E2DF',
    elevation: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  img: {
    height: 200,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },

  cardDesc: {
    color: 'black',
    fontSize: 12,
    marginTop: 8,
    flexShrink: 1,
  },

  cardText: {
    color: '#282726',
    marginBottom: 6,
    fontSize: 12,
  },
  cardAuthor: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 6,
    elevation: 5,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});
