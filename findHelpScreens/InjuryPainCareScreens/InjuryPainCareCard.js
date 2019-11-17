import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-elements';

// Card view component to be displayed on the main screen
export default class InjuryPainCareCard extends Component {
    render() {
        return(
        <Card
            featuredTitle="Injury and Pain Care"
            featuredTitleStyle={{fontSize:25}}
            image={require('../../assets/PainAndInjury.jpg')}
            >
            <Text style={{marginVertical:-8, fontWeight:'500', textAlign:'center'}}>
                6 quick tips to help you and your child when overcoming a traumatic injury. 
            </Text>
        </Card>
        );
    }
}