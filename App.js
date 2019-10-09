import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from './screens/MainScreen';
import TestScreen from './screens/TestScreen';

 export default class App extends React.Component {
   render() {
  return (
    <Apps />
  );
   }
}

const NavigationBar = createStackNavigator({
  Home: MainScreen,
  Test: TestScreen
});

const Apps = createAppContainer(NavigationBar)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
