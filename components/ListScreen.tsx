import { StyleSheet, View, FlatList, Text, SafeAreaView, Pressable } from 'react-native';
import { IUser, api } from "../services/apiServicess"
import React, { ReactElement, useEffect, useState } from 'react';



export function ListScreen({ navigation }) {

    const [usersList, setUserList] = useState<IUser[]>([])

    useEffect(() => {
        // fetch the users list when the component mounted
        api.getAllUsers().then((users: IUser[]) => {
            setUserList(users)
        })
    }, [])
    //TODO: handle names for screens
    const renderItem = ({ item }: { item: IUser }): ReactElement => (
        <Pressable style={styles.cardContainer} onPress={() => navigation.navigate('Form Screen')}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
        </Pressable>
    );

    return (
            <FlatList
                style={styles.list}
                data={usersList}
                renderItem={renderItem}
                keyExtractor={(item: IUser) => `${item.title}-${item.id}`}
            />
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
        borderColor: '#808080',
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
        fontSize: 18,
        padding:5
    },
    bodyText: {
        padding:5
    }


});

