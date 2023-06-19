/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

interface SignupProps {
  navigation: any;
}

const SignUpScreen: React.FC<SignupProps> = ({navigation}) => {
    const [user, setUser] = useState('');
    const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    navigation.navigate('Login');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <TextInput placeholder="Name" value={user} onChangeText={setUser} />
      <TextInput placeholder="Phone Number" value={phno} onChangeText={setPhno} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Go to Login" onPress={goToLogin} />
    </View>
  );
};

export default SignUpScreen;
