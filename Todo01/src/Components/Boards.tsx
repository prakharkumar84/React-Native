import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Board {
  id: string;
  header: string;
  date: string;
}
interface Todo {
  id: string;
  header: string;
  title: string;
  time: string;
  desc: string;
  doc: string;
}
interface MyComponentProps {
  board: Board[];
  handleDeleteBoard: (id: string) => void;
  props: Todo[];
}
const Boards = ({board, handleDeleteBoard ,props}: MyComponentProps) => {
  const handleRemove = (id: string) => {
    handleDeleteBoard(id);
  };
  
const frequencies = new Map<String, number>();

  for (const element of props) {
    if (frequencies.has(element.header)) {
      frequencies.set(element.header, frequencies.get(element.header)! + 1);
    } else {
      frequencies.set(element.header, 1);
    }
  }
  return (
    <View style={styles.Container}>
      <FlatList
        data={board}
        renderItem={({item}) => (
          <Pressable>
            <View style={styles.card}>
              <View style={styles.header}>
                <View>
                  <Image
                    style={styles.image}
                    source={{
                      uri: 'https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=600',
                    }}
                  />
                </View>

                <View style={styles.box}>
                  <Text style={styles.times}>{item.date}</Text>
                  <Pressable
                    style={styles.btn}
                    onPress={() => handleRemove(item.id)}>
                    <Text style={styles.btntxt}>Remove</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.details}>
                <Text style={styles.headertxt}>
                  {frequencies.size? frequencies.get(item.header):0} Active Tasks
                </Text>
                <Text style={styles.titletxt}>{item.header}</Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Boards;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginEnd: 20,
    marginStart: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  card: {
    flex: 1,
    backgroundColor: 'skyblue',
    marginTop: 10,
    borderRadius: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  times: {
    color: 'black',
    marginRight: 20,
  },
  details: {
    marginLeft: 10,
    marginBottom: 20,
  },
  headertxt: {
    fontWeight: '600',
  },
  titletxt: {
    fontSize: 30,
    color: 'black',
  },
  btn: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btntxt: {
    color: 'white',
  },
});
