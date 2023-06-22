import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { IUser, api } from "../services/apiServicess"
import { UsersListContext } from "./ContextAPI"
export function FormScreen({ route, navigation }) {

    const { usersList, setUserList } = useContext(UsersListContext);
    const { selectedItem } = route.params;
    const [title, setTitle] = useState<string>(selectedItem.title ?? '')
    const [body, setBody] = useState<string>(selectedItem.body ?? '')

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


    const InputComponent = (props: { name: string, value: string, onChangeText: (text: string) => void }) => {
        const { name, value, onChangeText } = props
        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>{name}</Text>
                <TextInput
                    placeholder={name}
                    value={value}
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    multiline={true}
                    autoFocus={true}
                />
            </View>
        )
    }

    return (
        <View style={styles.constrainer}>
            <InputComponent name='Title' value={title} onChangeText={setTitle} />
            <InputComponent name='Body' value={body} onChangeText={setBody} />
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
    }

});

