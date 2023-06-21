import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { api } from "../services/apiServicess"

export function FormScreen({ route, navigation }) {

    const { selectedItem } = route.params;
    const [title, setTitle] = useState<string>(selectedItem.title ?? '')
    const [body, setBody] = useState<string>(selectedItem.body ?? '')

    const onSubmit = () => {
        api.updateUser({ ...selectedItem, title, body })
            .then(() => {
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

    };

    return (
        <View style={styles.constrainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Title:</Text>
                <TextInput
                    placeholder='Title'
                    value={title}
                    style={styles.textInput}
                    onChangeText={setTitle}
                    multiline={true}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Body:</Text>
                <TextInput
                    placeholder='Body'
                    value={body}
                    style={styles.textInput}
                    onChangeText={setBody}
                    multiline={true}
                />
            </View>
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
        margin: 10,
        padding: 5,
        borderColor: '#808080',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    text: {
        fontWeight: 'bold',
    },
    textContainer: {
        margin: 10
    }

});

