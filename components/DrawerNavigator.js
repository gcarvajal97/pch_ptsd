import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../screens/MainScreen';
import TestScreen from '../screens/TestScreen';
import StackNavigator from './StackNavigator';

// DrawerNavigator: user opens using button on the top left of the header
// Drawer slides out from the side and contains components listed below
// Currently points to the StackNavigator, which points to the MainScreen and TestScreen
const DrawerNav = createDrawerNavigator({
    Home: StackNavigator,
});

// New in this version of React Native, must be referenced/returned
const DrawContainer = createAppContainer(DrawerNav);

export default class DrawerNavigator extends Component {
    render() {
        return <DrawContainer />;
    }
}
