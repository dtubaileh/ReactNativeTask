import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, ViewProps, Text, SafeAreaView } from 'react-native';
import { IUser, api } from "./components/apiServicess"
import React, { ReactElement, useEffect, useState } from 'react';

interface RenderItemProps extends ViewProps {
  item: IUser[];
}

export default function App() {

  const [usersList, setUserList] = useState<IUser[]>([])

  useEffect(() => {
    // fetch the users list when the component mounted
    api.getAllUsers().then((users: IUser[]) => {
      setUserList(users)
    })
  }, [])

  const renderItem = ({ item }: { item: IUser }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  return (
    <View>
      <SafeAreaView />
      <FlatList
        style={styles.list}
        data={usersList}
        renderItem={renderItem}
        keyExtractor={(item: IUser) => `${item.title}-${item.id}`}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  list: { margin: 5 },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    margin: 5,
    flexDirection: 'column',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18
  }

});

