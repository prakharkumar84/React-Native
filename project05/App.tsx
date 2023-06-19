import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Components/LoginScreen';
import Home from './Components/Home';
import Entry from './Components/Entry';
import States from './Components/States';
import AP from './Components/AP';
import Details from './Components/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{title: 'Travellers'}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Travellers'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Travellers'}}
        />
        <Stack.Screen
          name="AP"
          component={AP}
          options={{title: 'Travellers'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Travellers'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
