import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card, Button as CardButton} from 'react-native-elements';
// react-native and react-native-elements each have their Button components.
// To ensure we are using the correct one in the Card, I have imported Button as CardButton from elements
import NavigationService from '../components/NavigationService';

// Card view component to be displayed on the main screen
export default class QuizCard extends Component {
    render() {
        return(
        <Card
            featuredTitle="Quick Tips"
            image={require('../assets/QuickTips.jpg')}>
            <Text style={{ marginBottom: 5 }}>
                6 quick tips to help you and your child when overcoming an injury. 
            </Text>
        </Card>
        );
    }
}