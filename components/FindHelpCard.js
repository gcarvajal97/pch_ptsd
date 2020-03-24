import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button as CardButton } from 'react-native-elements';
import NavigationService from './NavigationService';
import translate from './translateService';
import colors from '../colors';

// Card view component to be displayed on the main screen
// We can now use the NavigationService to navigate to screens as seen below (NavigationService.navigate('WhateverScreen'))
export default class FindHelpCard extends Component {
    render() {
        return(
        <Card
            featuredTitle={translate('mainScreen.findHelpTitle')}
            image={require('../assets/FindWaysHelp.jpg')}
            accessible
            accessibilityLabel={translate('mainScreen.findHelpAccessLabel')}>
            <Text style={{ marginBottom: 5 }}>
                {translate('mainScreen.findHelpCaption')} 
            </Text>
            <CardButton onPress={()=>NavigationService.navigate('FindHelp')}
                testID='FindHelpButton'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: colors.accent }}
                title={translate('mainScreen.findHelpButton')} 
                accessible
                accessibilityLabel={translate('mainScreen.findHelpButton')}
                accessibilityHint={translate('mainScreen.findHelpAccessHint')}
                />
        </Card>
        );
    }
}