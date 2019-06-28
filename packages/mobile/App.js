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
import { checkPermission } from './src/components/notifications/notifications';
import ChatHeader from './src/components/chatlanding/header';
import ChatFooter from './src/components/chatlanding/chatfooter';
import ChatBody from './src/components/chatlanding/chatbody';
import io from 'socket.io-client';

class App extends React.Component {
state={message:'',
data:[{name:'user1',message:'hello'},{name:'user2',message:'hi, how are you'}],
socket:io.connect('http://192.168.0.7:8080')}

  componentDidMount() {
    this.state.socket.on('chat-server',msg=>{
      this.setState({data:[...this.state.data,msg]})
    })
  }

  render() {
    return (<View style={styles.container}>
      <ChatHeader></ChatHeader>
      <ScrollView>
        <ChatBody  data={this.state.data}></ChatBody>
      </ScrollView>
      <ChatFooter setTextMessage={(message) =>this.setState({message})} socket={this.state.socket}></ChatFooter>
    </View>);
  }
}

export default App; 

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