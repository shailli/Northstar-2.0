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
  StyleSheet, Text, View, TouchableOpacity, AsyncStorage,ScrollView
} from 'react-native';
import { checkPermission } from './src/components/notifications/notifications';
import ChatHeader from './src/components/chatlanding/header';
import ChatFooter from './src/components/chatlanding/chatfooter';
import ChatBody from './src/components/chatlanding/chatbody';

export default function App() {
  const [count, setCount] = useState(0);
  showAlert = (title, body) => {
    Alert.alert(
      title, body,
      [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }
  // Similar to componentDidMount:
  useEffect(() => {
    // Update the document title using the browser API
    setCount(count + 1);
    checkPermission();
  }, []);
  return (
    <View style={styles.container}>
      <ChatHeader></ChatHeader>
        <ScrollView>
          <ChatBody></ChatBody>
        </ScrollView>
      <ChatFooter></ChatFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex:1
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
