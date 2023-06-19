import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  Image,
  Pressable,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

interface Todo {
  id: string;
  header: string;
  title: string;
  time: string;
  desc: string;
  doc: string;
}

interface MyComponentProps {
  doneProps: Todo[];
  props: Todo[];
  handleAddDone: (item: Todo) => void;
  handleDeleteTodo: (id: string) => void;
  handleHide: (value: Boolean) => void;
}

const Container: React.FC<MyComponentProps> = ({
  doneProps,
  props,
  handleAddDone,
  handleDeleteTodo,
  handleHide,
}) => {
  const [isActive, setIsActive] = useState(true);
  const [isDone, setIsDone] = useState(false);

  const handleActivePress = () => {
    handleHide(true);
    setIsDone(false);
    setIsActive(true);
  };
  const handleDonePress = () => {
    handleHide(true);
    setIsActive(false);
    setIsDone(true);
  };

  const handleMove = (item: Todo) => {
    handleAddDone(item);
    handleDeleteTodo(item.id);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.btnContainer}>
        <Pressable
          style={isActive ? styles.btnPress : styles.btn}
          onPress={handleActivePress}>
          <Text
            style={isActive ? styles.activebtntextPress : styles.activebtntext}>
            Active
          </Text>
        </Pressable>
        <Pressable
          style={isDone ? styles.btnPress : styles.btn}
          onPress={handleDonePress}>
          <Text
            style={isDone ? styles.activebtntextPress : styles.activebtntext}>
            Done
          </Text>
        </Pressable>
      </View>

      {isActive && (
        <FlatList
          data={props}
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
                    <Text style={styles.times}>{item.time}</Text>
                    <BouncyCheckbox
                      size={40}
                      disableBuiltInState
                      iconStyle={{borderColor: 'red'}}
                      innerIconStyle={{borderWidth: 2}}
                      isChecked={false}
                      onPress={() => handleMove(item)}
                      fillColor="#c9a0dc"
                      unfillColor="white"
                    />
                  </View>
                </View>
                <View style={styles.details}>
                  <Text style={styles.headertxt}>{item.header}</Text>
                  <Text style={styles.titletxt}>{item.title}</Text>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      )}
      {isDone && (
        <FlatList
          data={doneProps}
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
                    <Text style={styles.times}>{item.time}</Text>
                    <BouncyCheckbox
                      size={40}
                      disableBuiltInState
                      iconStyle={{borderColor: 'red'}}
                      innerIconStyle={{borderWidth: 2}}
                      isChecked={isDone}
                      onPress={() => handleMove(item)}
                      fillColor="#c9a0dc"
                      unfillColor="white"
                    />
                  </View>
                </View>
                <View style={styles.details}>
                  <Text style={styles.headertxt}>{item.header}</Text>
                  <Text style={styles.titletxt}>{item.title}</Text>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginEnd: 20,
    marginStart: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  btn: {
    borderRadius: 20,
    borderColor: '#5E8AFF',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  btnPress: {
    borderRadius: 20,
    borderColor: '#5E8AFF',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
    backgroundColor: '#5E8AFF',
    marginTop: 5,
  },
  activebtntext: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  activebtntextPress: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
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
});
