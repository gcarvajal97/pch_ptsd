import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Import other screens as components to use below
//import MainScreen from './screens/MainScreen';
//import TestScreen from './screens/TestScreen';
import DrawerNavigator from './components/DrawerNavigator';


// Screen/View information has been moved to it's own file (MainScreen.js and TestScreen.js)
// Now App class just calls the NavBar container
// This will control the flow of our app and keep our main file here from becoming too large
 export default class App extends React.Component {
   render() {
  return (
    // just one call to the NavBar container needed
    <DrawerNavigator />
  );
   }
}
