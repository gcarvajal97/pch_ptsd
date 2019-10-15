import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerActions} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import MainScreen from '../screens/MainScreen.js';
import TestScreen from '../screens/TestScreen.js';

// The NavBar currently can access these two screens
// Will add more as the app progresses
const NavigationBar = createStackNavigator({
    Home: MainScreen,
    Test: TestScreen
  });
  
  // New in this version of RN, must be created and referenced in class App
  const StackContainer = createAppContainer(NavigationBar);

  export default class StackNavigator extends Component {
      render() {
          return <StackContainer screenProps={{openDrawer: ()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}} />
      }
  }