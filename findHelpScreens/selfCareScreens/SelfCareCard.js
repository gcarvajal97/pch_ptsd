import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card, Button as CardButton} from 'react-native-elements';
// react-native and react-native-elements each have their Button components.
// To ensure we are using the correct one in the Card, I have imported Button as CardButton from elements
import NavigationService from '../../components/NavigationService';

// Card view component to be displayed on the main screen
export default class SelfCareCard extends Component {
    render() {
        return(
        <Card
            featuredTitle="Self Care"
            featuredTitleStyle={{fontSize:40}}
            image={require('../assets/SelfCare.jpg')}
            accessible
            accessibilityLabel="Photo of mother holding child">
            <Text style={{marginVertical:-8, fontWeight:'500', textAlign:'center'}}>
                Parents need care too.
            </Text>
        </Card>
        );
    }
}