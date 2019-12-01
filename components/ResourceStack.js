import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NavigationService from './NavigationService';
import ResourceScreen from '../drawerScreens/ResourceScreen';

// StackNavigator: This navigator controls the flow from the main screen to other screens and back (Stack)
// This is called by the DrawerNavigator, so it is sort of nested inside
const ResourceNavigationBar = createStackNavigator({
    Resources: ResourceScreen
  });
  
  // New in this version of React Native, must be created and reference/returned
  const ResourceStackContainer = createAppContainer(ResourceNavigationBar);

  // The navigator now sends its references to the NavigationService
  export default class ResourceStack extends Component {
      render() {
          return <ResourceStackContainer
          ref={navigatorRef => {
            NavigationService.setStackLevelNavigator(navigatorRef);
          }}/>
      }
  }