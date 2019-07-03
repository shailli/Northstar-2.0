/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* eslint-disable import/no-unresolved */

import React, { useEffect } from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { View } from 'react-native';
import { primary, background } from 'shared';
import { checkPermission } from './src/components/notifications/notifications';
import Login from './src/components/login';

const App = () => {
  // Similar to componentDidMount:
  useEffect(() => {
    checkPermission();
  }, []);
  return (
    <View style={[background]}>
      <Login />
    </View>
  );
};

const RootStack = createStackNavigator(
  {
    ChatListing: {
      screen: App,
      navigationOptions: () => ({
        headerTitleStyle: { fontSize: 18 },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: primary.color,
        },
        title: 'NorthStar',
      }),
    },
  },
  {
    initialRouteName: 'ChatListing',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Root: RootStack,
    },
    {
      initialRouteName: 'Root',
    },
  ),
);
