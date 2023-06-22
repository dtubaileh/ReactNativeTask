import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { IUser, api } from "../services/apiServicess"
import { UsersListContext } from "./ContextAPI"

export function FormScreen({ route, navigation }) {
    const { usersList, setUserList } = useContext(UsersListContext);
    const { selectedItem } = route.params;
    const [title, setTitle] = useState<string>(selectedItem.title ?? '')
    const [body, setBody] = useState<string>(selectedItem.body ?? '')
    const [isError, setIsError] = useState<boolean>(false)

    //TODO: validate for on submit, change UI for On submit
    const onSubmit = () => {
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

            }).finally(() => {
                navigation.goBack()
            })
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
            {isError && <Text style={styles.warningMsg}>Error: Title and/or Body must be filled </Text>}
            <Button title={"Submit"} onPress={onSubmit} />
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
        borderColor: '#808080',
        backgroundColor: '#fff',
        shadowColor: '#808080',
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
    }

});

