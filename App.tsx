import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen, FormScreen, UsersContextProvider } from './components/';
import { IUser } from './services/apiServicess';
import { Button, StyleSheet } from 'react-native';

export const SCREENS_NAME = {
  listScreen: 'List Screen',
  formScreen: 'Form Screen'
}

export default function App() {
  const Stack = createNativeStackNavigator();
  const [usersList, setUserList] = useState<IUser[]>([])

  return (
    <UsersContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREENS_NAME.listScreen}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#801b49',
            },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name={SCREENS_NAME.listScreen}
            component={ListScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  onPress={() => {
                    // Handle button press here
                  }}
                  title="Button"
                />
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

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#801b49",
  },
  tabBarLabel: {
    fontSize: 12,
    lineHeight: 16,
    flex: 1,
  },
  tabBarItem: {
    paddingTop: 16
  }
})

