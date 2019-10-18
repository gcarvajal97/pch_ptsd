import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card, Button as CardButton} from 'react-native-elements';
// react-native and react-native-elements each have their own Button components.
// To ensure we are using the correct one in the Card, I have imported Button as CardButton from elements

// Card view component to be displayed on the main screen
export default class LearnMoreCard extends Component {
    render() {
        return(
        <Card
            featuredTitle='Learn More About Injury and Trauma'
            image={require('../assets/LearnMoreMD.jpg')}>
            <Text style={{ marginBottom: 5 }}>
                Get up-to-date information and expert guidance to assist you and your injured child.
            </Text>
            <CardButton onPress={null}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='LEARN MORE' />
        </Card>
        );
    }
}