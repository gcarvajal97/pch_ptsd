import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import StackNavigator from './StackNavigator';
import NavigationService from './NavigationService';
import ResourceStack from './ResourceStack';
import GlossaryStack from './GlossaryStack';
import { translate } from './translateService';

// DrawerNavigator: user opens using button on the top left of the header
// Drawer slides out from the side and contains components listed below
const DrawerNav = createDrawerNavigator({
    Home: {
        screen: StackNavigator,
            navigationOptions: ()=> ({title: translate('drawerNavigator.home')}) }, 
    Resources: {
        screen: ResourceStack,
            navigationOptions: ()=> ({title: translate('drawerNavigator.resources')}) },
    Glossary: {
        screen: GlossaryStack,
            navigationOptions: ()=> ({title: translate('drawerNavigator.glossary')}) }
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
