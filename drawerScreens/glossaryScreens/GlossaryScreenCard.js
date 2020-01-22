import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

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