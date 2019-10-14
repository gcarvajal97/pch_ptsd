import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../screens/MainScreen';
import TestScreen from '../screens/TestScreen';
import StackNavigator from './StackNavigator';

const DrawerNav = createDrawerNavigator({
    Home: StackNavigator,
    Same: StackNavigator
});

const DrawContainer = createAppContainer(DrawerNav);

export default class DrawerNavigator extends Component {
    render() {
        return <DrawContainer />;
    }
}
