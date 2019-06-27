import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableHighlight, ImageBackground } from 'react-native';

const ChatBody = () => {
    const [text, setText] = useState();
    const data = [{user:'user1', message: "hello" }, { user:'user2',message: "hi how r u?" }]
    return (
        <ImageBackground source={require('../../../assets/background.png')} style={styles.bodyContainer}>
            <View style={[styles.conent,styles.otherText]}>
                <Text style={styles.name}>{data[0].user}:</Text>
                <Text style={styles.message}>{data[0].user}</Text>
            </View>

            <View style={[styles.conent,styles.ownText]}>
                <Text style={styles.name}>{data[1].user}:</Text>
                <Text style={styles.message}>{data[1].user}</Text>
            </View>
        </ImageBackground>
    );
}

export default ChatBody;

const styles = StyleSheet.create({
    bodyContainer: { width: '100%', height: 610, flex: 1, resizeMode: 'cover' },
    conent: { 
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10, 
        marginLeft: 5,
        marginRight:5,
        flexDirection:'row',
    },
    otherText:{
        backgroundColor: "#fff", 
        alignSelf: 'flex-start'
    },
    name:{
        fontSize: 20,
        marginRight:5,
        fontWeight:"700"
    },
    message:{
        fontSize: 20,
    },
    ownText: {
         backgroundColor: "#E0FFFF", 
         alignSelf: 'flex-end'
    }
})