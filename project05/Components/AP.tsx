import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Places from './Places';
import Navbar from './Navbar';

interface DetailsScreenProps {
  route: any; // React Navigation route prop type
  navigation: any;
}

const AP = ({route, navigation}: DetailsScreenProps) => {
  const {data} = route.params;
  return (
    <>
      <Navbar navigation={navigation} />
      <Places data={data} navigation={navigation}/>
    </>
  );
};

export default AP;

const styles = StyleSheet.create({});
