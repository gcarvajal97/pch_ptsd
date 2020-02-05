import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card, Button as CardButton} from 'react-native-elements';
import translate from '../../components/translateService';

// Card view component to be displayed on the main screen
export default class QuickTipsCard extends Component {
    render() {
        return(
        <Card
            featuredTitle={translate('quickTips.cardHeader')}
            featuredTitleStyle={{fontSize:40}}
            image={require('../../assets/QuickTips.jpg')}
            accessible
            accessibilityLabel={translate('quickTips.accessibilityLabelPic')}>
            <Text style={{marginVertical:-8, fontWeight:'500', textAlign:'center'}}>
                {translate('quickTips.cardTitle')}
            </Text>
        </Card>
        );
    }
}