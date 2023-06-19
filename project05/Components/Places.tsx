import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import detail from './Data/detail';

interface ListItem {
  id: string;
  uid: number;
  text: string;
  img: string;
  desc: string;
}

interface FlatListProps {
  data: ListItem[];
  navigation: any;
}
const Places: React.FC<FlatListProps> = ({data, navigation}) => {
  const renderItem = ({item}: {item: ListItem}) => (
    <View style={styles.gridItem}>
      <View style={styles.gridItemContent}>
        <Image source={{uri: item.img}} style={styles.image}></Image>
        <Text style={styles.heading}>{item.text}</Text>
        <Text numberOfLines={3} style={styles.desc}>
          {item.desc}
        </Text>
        <TouchableOpacity
          style={styles.main}
          onPress={() => {
            if (item.id === '1') {
              navigation.navigate('Details', {detail});
            }
          }}>
          <Text style={styles.btn}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  gridItem: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').width / 1.5,
    margin: 20,
    elevation: 2,
    borderRadius: 6,
    shadowOffset: {
      height: 1,
      width: 3,
    },
    backgroundColor: 'white',
  },
  gridItemContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    backgroundColor: '#EE5684',
    padding: 5,
    flexDirection: 'row',
    marginTop: 6,
    elevation: 2,
    borderRadius: 15,
    shadowOffset: {
      height: 1,
      width: 3,
    },
    marginBottom: 6,
    flexShrink: 1,
    width: 100,
  },
  image: {
    height: Dimensions.get('window').width / 2.7,
    width: Dimensions.get('window').width / 2.5,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 6,
  },
  desc: {
    color: 'grey',
    marginTop: 6,
    flexGrow: 1,
    fontSize: 10,
    marginStart: 2,
  },
  btn: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Places;
