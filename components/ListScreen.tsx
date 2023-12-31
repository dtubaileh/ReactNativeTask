import { StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { IUser, api } from "../services/apiServicess"
import React, { ReactElement, useContext, useEffect } from 'react';
import { UsersListContext } from "./ContextAPI"
import { SCREENS_NAME, COLORS } from "../utils"

export function ListScreen({ navigation }) {
    const { usersList, setUserList } = useContext(UsersListContext)

    useEffect(() => {
        // fetch the users list when the component mounted
        api.getAllUsers().then((users: IUser[]) => {
            setUserList(users)
        })
    }, [])
    const renderItem = ({ item }: { item: IUser }): ReactElement => (
        <Pressable style={styles.cardContainer} onPress={() => navigation.navigate(SCREENS_NAME.formScreen, { selectedItem: item })}>
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
    list: { margin: 5, backgroundColor:COLORS.white },
    cardContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 8,
        margin: 5,
        flexDirection: 'column',
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5
    },
    bodyText: {
        padding: 5
    }


});

