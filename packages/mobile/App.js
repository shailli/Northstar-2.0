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
import {Router, Scene} from 'react-native-router-flux';
import Chat from './src/components/chatlanding/chat';
import Camera from './src/components/chatlanding/camara';

class App extends React.Component {

  render() {
    return (<Router>
      <Scene key="root">
        <Scene key="chat" component={Chat} title="Chat" initial hideBackImage={true}></Scene>
        <Scene key="camera" component={Camera} title="Camera" hideBackImage={true}></Scene>
      </Scene>
    </Router>);
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