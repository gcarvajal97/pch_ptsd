import React, { Component } from "react";
import { View, Button, ScrollView } from "react-native";
import LearnMoreCard from '../components/LearnMoreCard';
import QuizCard from '../components/QuizCard';
import FindHelpCard from '../components/FindHelpCard';
import NavigationService from '../components/NavigationService';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Get users locale setting for i18n translation
i18n.locale = Localization.locale;
i18n.fallbacks = true;

    // I have learned that Props will become deprecated soon, this code has been changed to follow the
    // new best practice in React (to hopefully avoid features breaking in future updates).
    // NavigationService is a new file I created, allowing us to use the openDrawer function.
class MainScreen extends Component {

    static navigationOptions = () => ({
        headerTitle: i18n.t('PediatricPTSD'),
        headerLeft: (<View style={{ margin: 5 }}><Button 
            onPress={()=>NavigationService.openDrawer()}
            title={i18n.t('more')}></Button></View>)
    })

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

i18n.translations = {
    en: { PediatricPTSD: 'Pediatric PTSD', more: 'more'},
    es: { PediatricPTSD: 'Pediátrico TEPT', more: 'más'},
  };

