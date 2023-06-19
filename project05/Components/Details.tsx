import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from './Navbar';

interface props {
  route: any;
  navigation: any;
}

const Details = ({navigation, route}: props) => {
  const {detail} = route.params
  return (
    <View>
      <Navbar navigation={navigation} />
      <View>
        <View>
          <Image style={styles.headerImage} source={{uri: detail.url}}></Image>
        </View>
        <View>
          <Text>{detail.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  headerImage: {
    height: 100,
    width: 100,
  },
});
