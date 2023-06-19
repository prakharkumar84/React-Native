import React, {useState} from 'react';
import {
  Image,
  Pressable,
  View,
  StyleSheet,
  Modal,
  Text,
  Button,
} from 'react-native';
import About from './About';
import Notifications from './Notifications';
import {TouchableOpacity} from 'react-native';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    console.log('i was here');
  };
  const handleAboutPress = () => {
    setIsModalVisible(true);
    console.log('i was here');
   
      <About />;
   
    console.log('i was here');
  };
  const handleNotificationPress = () => {
    <Notifications />;
  };
  const handlePress = () => {
    <DropdownMenu />;
  };
  return (
    <View style={styles.nav}>
      <View style={styles.nav1}>
        <TouchableOpacity style={styles.circle} onPress={handleAboutPress}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.navComponent}>
        <TouchableOpacity
          style={styles.circle}
          onPress={handleNotificationPress}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/537/580/png-transparent-bell-notification-communication-information-icon.png',
            }}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={handlePress}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/256/4436/4436678.png',
            }}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111C2F',
    flexWrap: 'wrap',
  },
  nav1: {
    marginTop: 30,
  },
  circle: {
    marginLeft: 20,
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 30,
    borderWidth: 1,
  },
  navComponent: {
    flexDirection: 'row',
    marginRight: 20,
    marginTop: 15,
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
    height: 500,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'red',
    height: 500,
  },
});
