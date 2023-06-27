/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


interface loginProps {
  navigation: any;
}

const LoginScreen: React.FC<loginProps> = ({navigation}) => {
  const handleContinue = () => {
    console.log('Continue pressed');
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/carrierLogo.png')}
        style={styles.icon}
      />
      <Text style={[styles.welcomeText, {color: '#1b3176'}]}>Welcome</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f6',
  },
  icon: {
    height: 100,
    width: 250,
    marginBottom: 300,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    marginBottom: 40,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0074f1',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  forgotPassword: {
    color: '#0074f1',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginScreen;
