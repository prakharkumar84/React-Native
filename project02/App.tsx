import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import Home from './src/Home';

const AppNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Signup: {screen: SignUpScreen},
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
