import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCards from './Components/FancyCards';
import Actioncard from './Components/Actioncard';
import ContactList from './Components/ContactList';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards/>
        <FancyCards/>
        <Actioncard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body:{
    
  }
})
export default App;

