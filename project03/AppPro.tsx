import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';

const AppPro = () => {
  const [email, onEmail] = useState('');
  const [password, onPassword] = useState('');

  const handleLogIn = () => {
    if (email === 'abc@gmail.com' && password === '12345') {
      ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Login UnSuccessful', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Login</Text>
          <TextInput
            style={styles.container}
            value={email}
            placeholder="Enter Your Email"
            onChangeText={onEmail}
          />
          <TextInput
            style={styles.container}
            value={password}
            placeholder="Enter Your Password"
            onChangeText={onPassword}
            secureTextEntry
          />
          <Button title="LogIn" onPress={handleLogIn}></Button>
          <View style={styles.container1}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/4591254/pexels-photo-4591254.jpeg?auto=compress&cs=tinysrgb&w=600',
              }}
              style={styles.img}></Image>
          </View>
          <View style={styles.flexible}>
            <View style={[styles.clr, styles.clr1]}>
              <Text style={styles.text}>RED</Text>
            </View>
            <View style={[styles.clr, styles.clr2]}>
              <Text style={styles.text}>BLUE</Text>
            </View>
            <View style={[styles.clr, styles.clr3]}>
              <Text style={styles.text}>GREEN</Text>
            </View>
          </View>
          <ScrollView style={styles.flexible} horizontal={true}>
              <View style={[styles.clr, styles.clr1]}>
                <Text style={styles.text}>RED</Text>
              </View>
              <View style={[styles.clr, styles.clr2]}>
                <Text style={styles.text}>BLUE</Text>
              </View>
              <View style={[styles.clr, styles.clr3]}>
                <Text style={styles.text}>GREEN</Text>
              </View>
              <View style={[styles.clr, styles.clr3]}>
                <Text style={styles.text}>GREEN</Text>
              </View>
              <View style={[styles.clr, styles.clr3]}>
                <Text style={styles.text}>GREEN</Text>
              </View>
              <View style={[styles.clr, styles.clr3]}>
                <Text style={styles.text}>GREEN</Text>
              </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    borderColor: 'red',
  },
  container1: {
    borderWidth:2,
    margin: 10,
    
  },
  img:{
    height:200,
    borderRadius:10,
    padding:10,
    margin:10
  },
  flexible:{
    flex:1,
    flexDirection:'row'
  },
  clr:{
    height:100,
    width:100,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    borderRadius:6
  },
  clr1:{
    backgroundColor:'red'
  },
  clr2:{
    backgroundColor:'blue'
  },
  clr3:{
    backgroundColor:'green'
  },
  text:{
    color:'white'
  }
});

export default AppPro;
