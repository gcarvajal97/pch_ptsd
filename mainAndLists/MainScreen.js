import React, { Component } from "react";
import { View, Button, ScrollView } from "react-native";
import LearnMoreCard from '../components/LearnMoreCard';
import QuizCard from '../components/QuizCard';
import FindHelpCard from '../components/FindHelpCard';
import NavigationService from '../components/NavigationService';
import * as Localization from 'expo-localization';

    // I have learned that Props will become deprecated soon, this code has been changed to follow the
    // new best practice in React (to hopefully avoid features breaking in future updates).
    // NavigationService is a new file I created, allowing us to use the openDrawer function.
class MainScreen extends Component {

    static navigationOptions = () => ({
        headerTitle: 'Pediatric PTSD',
        headerLeft: (<View style={{ margin: 5 }}><Button 
            onPress={()=>NavigationService.openDrawer()}
            title='More'></Button></View>)
    })

    render() {
        // Test that users local is correctly returned.
        console.log(Localization.locale)
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
