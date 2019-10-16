import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerActions} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import MainScreen from '../screens/MainScreen.js';
import TestScreen from '../screens/TestScreen.js';

// StackNavigator: This navigator controls the flow from the main screen to other screens and back (Stack)
// This is called by the DrawerNavigator, so it is sort of nested inside. Drawer to select a starting point and
// the Stack to move forward into screens and then back.
// Currently only navigates to the screens below
const NavigationBar = createStackNavigator({
    Home: MainScreen,
    Test: TestScreen
  });
  
  // New in this version of React Native, must be created and reference/returned
  const StackContainer = createAppContainer(NavigationBar);

  // 
  export default class StackNavigator extends Component {
      render() {
          return <StackContainer screenProps={{openDrawer: ()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}} />
      }
  }