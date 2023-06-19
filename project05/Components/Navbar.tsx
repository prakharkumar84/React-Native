import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface props{
    navigation:any
}
const Navbar = ({navigation}:props) => {
    const handleHome = () => {
      navigation.navigate("Home")
    };
    const handleAboutMe = () => {
      //
    };
    const handleContact = () => {
      //
    };
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Image
          style={styles.headerImage}
          source={{
            uri: 'https://img.icons8.com/?size=1x&id=pyn83vRJXbQk&format=png',
          }}></Image>
        <Text style={styles.headerText}>Travellers</Text>
      </View>
      <View style={styles.test}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.cmp1} onPress={handleHome}>
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cmp1} onPress={handleAboutMe}>
            <Text style={styles.text}>About Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cmp1} onPress={handleContact}>
            <Text style={styles.text}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Navbar

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#6D9AC4',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#EBE8E8',
    height: 45,
    padding: 5,
  },
  title: {
    flexDirection: 'row',
    backgroundColor: '#EBE8E8',
    alignItems: 'center',
    padding: 5,
  },
  headerImage: {
    height: 40,
    width: 40,
    marginRight: 5,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  test: {
    flex: 1,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
    marginTop: 3,
  },
  cmp1: {
    marginLeft: 15,
  },
  text: {
    color: 'black',
  },
});