import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MainScreen from '../screens/MainScreen.js';
import TestScreen from '../screens/TestScreen.js';
import NavigationService from './NavigationService';

// StackNavigator: This navigator controls the flow from the main screen to other screens and back (Stack)
// This is called by the DrawerNavigator, so it is sort of nested inside
const NavigationBar = createStackNavigator({
    Home: MainScreen,
    Test: TestScreen
  });
  
  // New in this version of React Native, must be created and reference/returned
  const StackContainer = createAppContainer(NavigationBar);

  export default class StackNavigator extends Component {
      render() {
          return <StackContainer
          ref={navigatorRef => {
            NavigationService.setStackLevelNavigator(navigatorRef);
          }}/>
      }
  }