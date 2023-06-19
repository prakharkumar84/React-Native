/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Home = () => {
  const DATA1 = [
    {
      id: 1,
      name: 'prakhar',
    },
    {
      id: 2,
      name: 'Pk',
    },
  ];
  const DATA = [
    {
      id: 1,
      data: ['prakhar', 'asjdhsujd', 'djhdsdsd'],
    },
    {
      id: 2,
      data: ['Pk', 'ppk', 'zdhjsd'],
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const Name = ({name}) => {
    return (
      <View>
        <Text>{name}</Text>
      </View>
    );
  };

  return (
    <>
      <ImageBackground
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        resizeMode="cover"
      />

      <ScrollView>
        <View>
          <Text>Welcome To HomePage</Text>
          <Text />
          <Text />
          <Text />
          <Text>FlatList</Text>
          <FlatList
            data={DATA1}
            renderItem={({item}) => (
              <View style={styles.flatlist}>
                <View style={styles.margin}>
                  <Text>{item.id}</Text>
                </View>
                <Name name={item.name} />
              </View>
            )}
          />
          <Text />
          <Text />
          <Text />
          <Text>SectionList</Text>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View>
                <Text>{item}</Text>
              </View>
            )}
            renderSectionHeader={({section: {id}}) => <Text>{id}</Text>}
          />
          <Text />
          <Text />
          <Text />
          <Text>Image</Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://tinyurl.com/image8423',
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    flexDirection: 'row',
  },
  margin: {
    marginRight: 10,
  },
  image: {
    height: 300,
    width: 200,
  },
});

export default Home;
