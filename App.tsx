import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen, FormScreen, UsersContextProvider } from './components/';
import { IUser } from './services/apiServicess';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [usersList, setUserList] = useState<IUser[]>([])

  return (
    <UsersContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='List Screen'>
          <Stack.Screen name="List Screen" component={ListScreen} />
          <Stack.Screen name="Form Screen" component={FormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersContextProvider>
  );
}

