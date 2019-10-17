import React, { Component } from "react";
import { View, Button, ScrollView } from "react-native";

import LearnMoreCard from '../components/LearnMoreCard';
import QuizCard from '../components/QuizCard';
import FindHelpCard from '../components/FindHelpCard';

class MainScreen extends Component {

    // Only the header on this MainScreen contains the Drawer button. (static navOptions)
    // screenProps are passed from the Navigator, allows onPress to call openDrawer, which opens
    // side drawer to the user
    static navigationOptions = ({ screenProps }) => ({
        headerTitle: 'Pediatric PTSD',
        headerLeft: (<View style={{ margin: 5 }}><Button title="Test"
            onPress={() => screenProps.openDrawer()}
            title='More'></Button></View>)
    })

    render() {
        return (
            // Because we want the image, button and text to fit the width, it cannot shrink any further.
            // Otherwise the sides will just be white space and text/button will be tiny.
            // I wrapped the Card components in a scroll view to access the last card.
            <ScrollView>
                    <LearnMoreCard />
                    <QuizCard />
                    <FindHelpCard />
            </ScrollView>
        );
    }
}
export default MainScreen;