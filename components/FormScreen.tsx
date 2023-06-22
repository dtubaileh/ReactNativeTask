import { StyleSheet, View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { IUser, api } from "../services/apiServicess"
import { UsersListContext } from "./ContextAPI"
import { COLORS } from "../utils"

export function FormScreen({ route, navigation }) {
    const { usersList, setUserList } = useContext(UsersListContext);
    const selectedItem: IUser | undefined = route.params?.selectedItem;
    const [title, setTitle] = useState<string>(selectedItem?.title ?? '')
    const [body, setBody] = useState<string>(selectedItem?.body ?? '')
    const isAllTextFilled = title.length > 0 && body.length > 0

    const onSubmit = () => {
        // Check if there is a selected item, so to update data
        if (!!selectedItem) {
            api.updateUser({ ...selectedItem, title, body })
                .then((updatedUser: IUser) => {
                    setUserList(usersList.map((item) => (item.id === updatedUser.id ? updatedUser : item)))
                    Alert.alert("Successfully Updated")
                })
                .catch((error) => {
                    Alert.alert(
                        "Failed To Update",
                        `${error}`,
                    );

                })
                .finally(() => {
                    navigation.goBack()
                })
        }
        // else, add a new item to the list
        else {
            api.addUser({ body, title, userId: usersList.length })
                .then((addedUser: IUser) => {
                    setUserList([...usersList, addedUser])
                    Alert.alert("Successfully Updated")
                })
                .catch((error) => {
                    Alert.alert(
                        "Failed To Update",
                        `${error}`,
                    );
                })
                .finally(() => {
                    navigation.goBack()
                })
        }

    }


    return (
        <View style={styles.constrainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{"Title"}</Text>
                <TextInput
                    placeholder={"Title"}
                    value={title}
                    style={styles.textInput}
                    onChangeText={setTitle}
                    multiline={true}
                    autoFocus={true}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{"Body"}</Text>
                <TextInput
                    placeholder={"Body"}
                    value={body}
                    style={styles.textInput}
                    onChangeText={setBody}
                    multiline={true}
                />
            </View>
            <Pressable onPress={onSubmit} style={[styles.buttonContainer, { opacity: isAllTextFilled ? 1 : 0.5 }]} disabled={!isAllTextFilled}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    constrainer: {
        flex: 1,
        margin: 10
    },
    textInput: {
        margin: 3,
        padding: 5,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.gray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,

    },
    text: {
        fontWeight: 'bold',
    },
    textContainer: {
        margin: 10
    },
    warningMsg: {
        color: "red",
        margin: 10
    },
    buttonContainer: {
        backgroundColor: COLORS.tintPurple,
        alignItems: 'center',
        padding: 10,
        margin: 15,
        borderRadius: 8,
        borderColor: COLORS.gray,
        shadowColor: COLORS.gray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
    }

});

