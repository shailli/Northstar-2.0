import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableHighlight, ImageBackground ,Image} from 'react-native';
import TextMessage from './textMessage';

const ChatBody = (props) => {
    // let [ResultData, setData] = useState(props.data);
    const user="user1";
    
    // if(props.textMessage){
    //     // props.data.push({name:user,message:props.textMessage});
    //     props.socket.emit('chat-client',{message:props.textMessage,name:user});
    // }
    // useEffect(() => {
    //     setData(ResultData);
    // }, ResultData);

    return (
        <ImageBackground source={require('../../../assets/background.png')} style={styles.bodyContainer}>
            {props.data.map(item=>
                {item.isImage? <Image style={styles.image}
                source={{uri:"data:image/jpeg;base64,"+item.message}}
               />:<TextMessage data={item}></TextMessage>}
            )}
        </ImageBackground>
    );
}

export default ChatBody;

const styles = StyleSheet.create({
    bodyContainer: { width: '100%', height: 610, flex: 1, resizeMode: 'cover' },  
    image:{
        width:'40%',
        height:'100%',
        alignSelf: 'flex-end',
        height:80,
        margin:5
    },
    imageData:{
        backgroundColor:'red',
        height:85,
        padding:5
    }
})