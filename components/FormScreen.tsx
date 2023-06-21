import { StyleSheet, View, Text } from 'react-native';
import React, {  } from 'react';


export  function FormScreen() {

    
    return (
        <View>
            <Text>Deial</Text>
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
        fontSize: 18
    }

});

