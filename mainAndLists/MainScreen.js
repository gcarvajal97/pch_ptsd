import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import React, { Component } from "react";
import { Button, ScrollView, View } from "react-native";
import FindHelpCard from '../components/FindHelpCard';
import LearnMoreCard from '../components/LearnMoreCard';
import NavigationService from '../components/NavigationService';
import QuizCard from '../components/QuizCard';
import { translate } from '../components/translateService';
import colors from "../colors";

// Set users locale for i18n translation throughout the application
i18n.locale = Localization.locale;

class MainScreen extends Component {

    static navigationOptions = () => ({
        headerTitle: translate('mainScreen.pediatricPTSD'),
        headerLeft: (<View style={{ margin: 5 }}><Button
            onPress={()=>NavigationService.openDrawer()}
            title={translate('mainScreen.more')}
            color={colors.accent}
            accessible
            accessibilityLabel={translate("mainScreen.more")}
            accessibilityHint={translate("glossary.backHint")}></Button></View>)
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


