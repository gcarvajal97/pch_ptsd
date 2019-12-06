import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card, Button as CardButton} from 'react-native-elements';
// react-native and react-native-elements each have their Button components.
// To ensure we are using the correct one in the Card, I have imported Button as CardButton from elements
import NavigationService from '../../components/NavigationService';

// Card view component to be displayed on the main screen
export default class GlossaryScreenCard extends Component {
    render() {
        return(
            <Card
                featuredTitle="Glossary"
                featuredTitleStyle={{fontSize:40}}
                image={require('../../assets/GlossaryScreen.jpg')}
                accessible
                accessibilityLabel="Photo of a shelf of books">
                <Text style={{marginVertical:-8, fontWeight:'500', textAlign:'center'}}>
                    Find word definitions by category.
                </Text>
            </Card>
        );
    }
}