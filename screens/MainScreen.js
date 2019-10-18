import React, { Component } from "react";
import { View, Button, ScrollView } from "react-native";

import LearnMoreCard from '../components/LearnMoreCard';
import QuizCard from '../components/QuizCard';
import FindHelpCard from '../components/FindHelpCard';

class MainScreen extends Component {

    static navigationOptions = () => ({
        headerTitle: 'Pediatric PTSD',
        headerLeft: (<View style={{ margin: 5 }}><Button title="Test"
            onPress={null}
            title='More'></Button></View>)
    })

    // Because we want the image, button and text to fit the width, the cards can only shrink so much.
    // I wrapped the Card's in a scrollview so that users on smaller screens can still access everything
    render() {
        return (
            <ScrollView>
                    <LearnMoreCard />
                    <QuizCard />
                    <FindHelpCard />
            </ScrollView>
        );
    }
}
export default MainScreen;