import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import States from './States';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navbar from './Navbar';
import state from './Data/State';
import data from './Data/Place';

interface homeProps {
  navigation: any;
}

const Home: React.FC<homeProps> = ({navigation}) => {
  const handleButtonPress = (id: number) => {
    if (id == 1) {
      navigation.navigate('AP', {data});
    }
  };

  return (
    <View style={styles.main}>
      <Navbar navigation={navigation} />
      <ScrollView horizontal={true}>
        <View style={styles.content}>
          {state.map(item => (
            <States
              key={item.uid}
              id={item.uid}
              imageSource={item.imageUrl}
              title={item.name}
              description={item.dscr}
              buttonText={'Check Out'}
              navigation={navigation}
              onPressButton={handleButtonPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  main: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
