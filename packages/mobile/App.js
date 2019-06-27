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
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import { background } from 'shared';
import { checkPermission } from './src/components/notifications/notifications';

export default function App() {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount:
  useEffect(() => {
    // Update the document title using the browser API
    setCount(count + 1);
    checkPermission();
  }, []);
  return (
    <View style={[background, styles.container]}>
      <Text style={styles.welcome}>
        You clicked
        {count}
        times
      </Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}><Text>Click me</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});
