import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card, Button as CardButton} from 'react-native-elements';
// react-native and react-native-elements each have their Button components.
// To ensure we are using the correct one in the Card, I have imported Button as CardButton from elements

// Card view component to be displayed on the main screen
export default class FindHelpCard extends Component {
    render() {
        return(
        <Card
            featuredTitle="Help Your Child Recover"
            image={require('../assets/FindWaysHelp.jpg')}>
            <Text style={{ marginBottom: 5 }}>
                Dealing with emotional reactions and injury care can be difficult. Find ways to help your child recover. 
            </Text>
            <CardButton
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='FIND HELP' />
        </Card>
        );
    }
}