import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen, FormScreen, UsersContextProvider } from './components/';
import { IUser } from './services/apiServicess';
import { Button, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, SCREENS_NAME } from "./utils"


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <UsersContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREENS_NAME.listScreen}
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.tintPurple,
            },
            headerTintColor: COLORS.white,
          }}
        >
          <Stack.Screen
            name={SCREENS_NAME.listScreen}
            component={ListScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Ionicons name="add" size={32} color={COLORS.white} onPress={() => navigation.navigate(SCREENS_NAME.formScreen)} />
              ),
            })} />
          <Stack.Screen
            name={SCREENS_NAME.formScreen}
            component={FormScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersContextProvider>
  );
}
