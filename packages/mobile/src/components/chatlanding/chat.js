/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* eslint-disable import/no-unresolved */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, AsyncStorage, ScrollView
} from 'react-native';
import { checkPermission } from '../notifications/notifications';
import ChatHeader from './header';
import ChatFooter from './chatfooter';
import ChatBody from './chatbody';
import io from 'socket.io-client';

class Chat extends React.Component {
state={message:'',
data:[{userId:'user1',message:'hello'},{userId:'user2',message:'hi, how are you'}],
socket:io.connect('http://192.168.1.6:8080')}

  componentDidMount() {
    this.state.socket.emit('user-join');
    
    this.state.socket.on('user-history-chat',(data)=>{
      this.setState({data});
    });

    this.state.socket.on('chat-server',msg=>{
      this.setState({data:[...this.state.data,msg]})
    })
    checkPermission();
  }

  render() {
      let image=this.props.camaraImage;
    return (<View style={styles.container}>
      <ChatHeader ></ChatHeader>
      <ScrollView>
        <ChatBody  data={this.state.data} imagedata={image}></ChatBody>
      </ScrollView>
      <ChatFooter setTextMessage={(message) =>this.setState({message})} socket={this.state.socket}></ChatFooter>
    </View>);
  }
}

export default Chat; 

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});