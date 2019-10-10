import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Import other screens as components to use below
import MainScreen from './screens/MainScreen';
import TestScreen from './screens/TestScreen';


// Screen/View information has been moved to it's own file (MainScreen.js and TestScreen.js)
// Now App class just calls the NavBar container
// This will control the flow of our app and keep our main file here from becoming too large
 export default class App extends React.Component {
   render() {
  return (
    // just one call to the NavBar container needed
    <NavBar />
  );
   }
}

// The NavBar currently can access these two screens
// Will add more as the app progresses
const NavigationBar = createStackNavigator({
  Home: MainScreen,
  Test: TestScreen
});

// New in this version of RN, must be created and referenced in class App
const NavBar = createAppContainer(NavigationBar)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
