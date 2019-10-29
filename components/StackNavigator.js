import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NavigationService from './NavigationService';
import MainScreen from '../screens/MainScreen.js';
import TestScreen from '../screens/TestScreen.js';
import LearnMoreScreen from '../screens/LearnMore.js';
import FindHelpScreen from '../screens/FindHelp.js';
import QuizScreen from '../screens/QuizScreen.js';
import HowLongScreen from '../screens/HowLongScreen.js';

// StackNavigator: This navigator controls the flow from the main screen to other screens and back (Stack)
// This is called by the DrawerNavigator, so it is sort of nested inside
const NavigationBar = createStackNavigator({
    Home: MainScreen,
    Test: TestScreen,
    LearnMore: LearnMoreScreen,
    FindHelp: FindHelpScreen,
    Quiz: QuizScreen,
    HowLong: HowLongScreen
  });
  
  // New in this version of React Native, must be created and reference/returned
  const StackContainer = createAppContainer(NavigationBar);

  // The navigator now sends its references to the NavigationService
  export default class StackNavigator extends Component {
      render() {
          return <StackContainer
          ref={navigatorRef => {
            NavigationService.setStackLevelNavigator(navigatorRef);
          }}/>
      }
  }