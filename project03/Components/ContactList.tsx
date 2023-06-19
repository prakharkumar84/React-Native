import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Prakhar Kumar',
      status: 'Learning react Native',
      imageUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      uid: 2,
      name: 'Prakhar Jod',
      status: 'Teaching react Native',
      imageUrl:
        'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      uid: 3,
      name: 'PkBoss',
      status: 'Plays Games All day',
      imageUrl:
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      uid: 4,
      name: 'Pk',
      status: 'Does Nothing',
      imageUrl:
        'https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  return (
    <View>
      <Text style={styles.flatcard}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.userCard}>
            <Image source={{uri: contact.imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
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
    paddingHorizontal: 30,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'lightblue',
    padding:5,
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    color: 'black',
    fontSize: 17,
    fontWeight:'600'
  },
  userStatus: {},
});
