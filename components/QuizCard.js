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
            featuredTitle="Rate Your Child's Reactions"
            image={require('../assets/QuizRateReactions.jpg')}
            accessibilityLabel="Phoro of child covering her eyes with her hands.">
            <Text style={{ marginBottom: 5 }}>
                An injury or accident can be a scary or stressful experience. Take a quick quiz to measure your child's traumatic stress.
            </Text>
            <CardButton onPress={()=>NavigationService.navigate('Quiz')}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='TAKE THE QUIZ' 
                accessibilityLabel="Take the Quiz"
                accessibilityHint="Navigates to the quiz screen"/>
        </Card>
        );
    }
}