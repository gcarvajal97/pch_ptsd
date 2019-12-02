import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import StackNavigator from './StackNavigator';
import NavigationService from './NavigationService';
import resourceScreen from '../drawerScreens/resourcesScreens/resourceScreen';
import glossaryScreen from '../drawerScreens/glossaryScreen';


// DrawerNavigator: user opens using button on the top left of the header
// Drawer slides out from the side and contains components listed below
// Currently points to the StackNavigator, which points to the MainScreen and TestScreen
const DrawerNav = createDrawerNavigator({
    Home: StackNavigator,
    Resources: resourceScreen,
    Glossary: glossaryScreen
});

// New in this version of React Native, must be referenced/returned
const DrawContainer = createAppContainer(DrawerNav);

// The navigator now sends its references to the NavigationService
export default class DrawerNavigator extends Component {
    render() {
        return <DrawContainer 
        ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>;
    }
}
