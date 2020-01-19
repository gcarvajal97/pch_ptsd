import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import StackNavigator from './StackNavigator';
import NavigationService from './NavigationService';
import ResourceStack from './ResourceStack';
import GlossaryStack from './GlossaryStack';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.locale = Localization.locale;
i18n.fallbacks = true;

// DrawerNavigator: user opens using button on the top left of the header
// Drawer slides out from the side and contains components listed below
const DrawerNav = createDrawerNavigator({
    Home: {
        screen: StackNavigator,
            navigationOptions: ()=> ({title: i18n.t('Home')}) }, 
    Resources: {
        screen: ResourceStack,
            navigationOptions: ()=> ({title: i18n.t('Resources')}) },
    Glossary: {
        screen: GlossaryStack,
            navigationOptions: ()=> ({title: i18n.t('Glossary')}) }
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

i18n.translations = {
    en: { Home: 'Home', Resources:  'Resources', Glossary: 'Glossary', PediatricPTSD: 'Pediatric PTSD', more:'more'},
    es: { Home: 'Hogar', Resources: 'Recursos', Glossary: 'Glosario', PediatricPTSD: 'Pediátrico TEPT', more: 'más'},
  };
