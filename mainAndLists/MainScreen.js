import React, { Component } from "react";
import { Button, ScrollView, View } from "react-native";
import FindHelpCard from '../components/FindHelpCard';
import LearnMoreCard from '../components/LearnMoreCard';
import NavigationService from '../components/NavigationService';
import QuizCard from '../components/QuizCard';
import * as Localization from 'expo-localization';

// Stuck this here for now, since this is the entrypoint of our application
export const LOCALE = Localization.locale;

    // I have learned that Props will become deprecated soon, this code has been changed to follow the
    // new best practice in React (to hopefully avoid features breaking in future updates).
    // NavigationService is a new file I created, allowing me to use the openDrawer function.
class MainScreen extends Component {

    static navigationOptions = () => ({
        headerTitle: 'Pediatric PTSD',
        headerLeft: (<View style={{ margin: 5 }}><Button
            onPress={()=>NavigationService.openDrawer()}
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
