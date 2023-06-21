import React, {  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ListScreen, FormScreen} from './components/';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List Screen'>
        <Stack.Screen name="List Screen" component={ListScreen} />
        <Stack.Screen name="Form Screen" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

