import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, ImageBackground ,Image} from 'react-native';
import TextMessage from './textMessage';
import { Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';

const ChatBody = (props) => {
    // let [ResultData, setData] = useState(props.data);
    const userId="user1";
    
    // if(props.textMessage){
    //     // props.data.push({name:user,message:props.textMessage});
    //     props.socket.emit('chat-client',{message:props.textMessage,name:user});
    // }
    // useEffect(() => {
    //     setData(ResultData);
    // }, ResultData);
    return (
        <ImageBackground source={require('../../../assets/background.png')} style={styles.bodyContainer}>
            {props.data.map(item =>
                {return ((item.mediaType) ? renderMedia(item, userId) : <TextMessage data={item}></TextMessage>)}
            )}
        </ImageBackground>
    );
}

export default ChatBody;

const renderMedia = (item, userId) => {
    if (item.mediaType === 'camera') {
        return (<Image style={styles.image} source={{uri:"data:image/jpeg;base64,"+item.message}}/>)
    } else if (item.mediaType === 'file') {
        return (
            <TouchableOpacity style={[styles.displayFile, checkUser(item, userId)]} onPress={() => console.log("Icon included")} underlayColor='transparent'>
                <Text style={{ fontSize: 20 }} >{item.mediaName}</Text>
                <Icon 
                    raised
                    name='download'
                    size={16}
                    type='feather'
                    color='#075e54'
                    onPress={()=> downloadFile(item.mediaLink)}
                />
            </TouchableOpacity>
        );
        function checkUser(data, userId){
            if(data.userId === userId)
            return styles.ownText;
            else 
            return styles.otherText;
        }
    }
}

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
    },
    displayFile: {
        // color: 'blue',
        // textDecorationLine: 'underline',
        // fontSize: 20,
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        margin: 7,
        borderRadius: 7,
        paddingLeft: 10,
        paddingRight: 10,
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'flex-start'
        height: 40
    },
    ownText: {
        backgroundColor: "#E0FFFF", 
        alignSelf: 'flex-end'
   },
   otherText:{
       backgroundColor: "#fff", 
       alignSelf: 'flex-start'
   }

})

const downloadFile = (link) => {
    console.log(link)
    console.log();
    let fileUri = decodeURIComponent(link);
    fileUri = fileUri.substr(0, fileUri.indexOf('?'));
    let fileName = fileUri.split('/').pop();
    console.log(`${firebase.storage.Native.EXTERNAL_STORAGE_DIRECTORY_PATH}/${fileName}`);

    // To download file to loacal storage
    firebase
    .storage()
    .refFromURL(link)
    .downloadFile(
        `${firebase.storage.Native.EXTERNAL_STORAGE_DIRECTORY_PATH}/Download/${fileName}`
    )
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
}