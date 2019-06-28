import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput,TouchableHighlight,Image} from 'react-native';
import { Icon } from 'react-native-elements';

const ChatFooter = (props) => {
    let [text, setText] = useState();
    return (
        <View style={styles.footerContainer}>
            <TextInput style={styles.InputBox} type="text" placeholder="Type a message" value={text} onChangeText={setMessage}/>
            <TouchableHighlight style={{ height:'100%',width:40,position:'absolute',right:'5%'}} onPress={() => { this._fetchResults() }} underlayColor='transparent'>
                    <Icon style={styles.button}
                        raised
                        name='send'
                        size={20}
                        type='feather'
                        color='#075e54'
                        onPress={()=>sendMessage()} 
                    />
            </TouchableHighlight>
        </View>
    );
    function sendMessage(){
        console.log(text);
        // props.setTextMessage(text);
        props.socket.emit('chat-client',{message:text,name:'user1'});
        setText('');
    }
    function setMessage(text){
        setText(text);
    }
}



export default ChatFooter;

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        bottom: '2%',
        height: 40,
        width:'100%',
        paddingLeft: '2%',
        justifyContent:'center'
    },
    InputBox: {
        height: '100%',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        width: '85%',
        paddingRight: '2%',
        marginTop:'4%',
        backgroundColor:'#fff'
    },
    button:{
        height: '100%',
        borderColor:'gray',
        borderWidth:1,
        zIndex:2
    }
})