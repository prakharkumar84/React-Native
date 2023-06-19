/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Button, ToastAndroid} from 'react-native';


interface LoginProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    if (email === '1' && password==='1') {
      ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
      navigation.navigate('Home');
    }
    else{
        ToastAndroid.show('A pikachu did not appear nearby !', ToastAndroid.SHORT);
    }
  };

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Signup" onPress={goToSignup} />
    </View>
  );
};

export default LoginScreen;
