import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NavigationService from './NavigationService';
import GlossaryScreen from '../drawerScreens/GlossaryScreen';

// StackNavigator: This navigator controls the flow from the main screen to other screens and back (Stack)
// This is called by the DrawerNavigator, so it is sort of nested inside
const GlossaryNavigationBar = createStackNavigator({
    Glossary: GlossaryScreen
  });
  
  // New in this version of React Native, must be created and reference/returned
  const GlossaryStackContainer = createAppContainer(GlossaryNavigationBar);

  // The navigator now sends its references to the NavigationService
  export default class GlossaryStack extends Component {
      render() {
          return <GlossaryStackContainer
          ref={navigatorRef => {
            NavigationService.setStackLevelNavigator(navigatorRef);
          }}/>
      }
  }