import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface loginProps {
  navigation: any;
}

const LoginScreen: React.FC<loginProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handlePress = () => {
    //
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.heading}>LOG IN</Text>
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.email}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.pass}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <Button color="#EE5684" title="LOG IN" onPress={handleLogin}></Button>
        <View style={styles.lines}>
          <View style={styles.ht}>
            <View style={styles.border}></View>
          </View>
          <View style={styles.or}>
            <Text>OR</Text>
          </View>
          <View style={styles.ht}>
            <View style={styles.border}></View>
          </View>
        </View>
        <View style={styles.ways}>
          <TouchableOpacity style={styles.touch} onPress={handlePress}>
            <Image
              style={styles.img}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png',
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={handlePress}>
            <Image
              style={styles.img}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png',
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={handlePress}>
            <Image
              style={styles.img}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/145/145807.png',
              }}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.txt}>
          <Text>Login using these</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D9AC4',
  },
  container: {
    height: 'auto',
    width: 350,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 30,
  },
  title: {
    marginBottom: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  email: {
    borderRadius: 6,
    borderWidth: 0.3,
    marginBottom: 20,
    height: 35,
  },
  pass: {
    borderRadius: 6,
    borderWidth: 0.3,
    marginBottom: 20,
    height: 35,
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  btn: {
    borderRadius: 6,
  },
  lines: {
    flexDirection: 'row',
  },
  border: {
    borderBottomWidth: 0.3,
    marginTop: 35,
    width: 130,
  },
  or: {
    borderWidth: 0.3,
    borderRadius: 3,
    padding: 5,
    marginTop: 20,
    height: 30,
  },
  ht: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ways: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    margin: 20,
  },
  img: {
    height: 30,
    width: 30,
  },
  txt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
