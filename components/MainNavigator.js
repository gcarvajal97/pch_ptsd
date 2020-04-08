import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import translate from "./translateService";
import NavigationService from "./NavigationService";
import MainScreen from "../mainAndLists/MainScreen";
import YoureNotAlone from "../learnMoreScreens/YoureNotAlone";
import ReactionsToInjury from "../learnMoreScreens/ReactionsToInjury";
import LearnMoreList from "../mainAndLists/LearnMoreList";
import TraumaticStressReactions from "../learnMoreScreens/TraumaticStressReactions";
import FindHelpList from "../mainAndLists/FindHelpList";
import WhenToGetOutsideHelpScreen from "../findHelpScreens/outsideHelpScreens/WhenToGetOutsideHelp";
import HowLongScreen from "../learnMoreScreens/HowLongScreen";
import HowToTalk from "../findHelpScreens/HowToTalk";
import QuickTips from "../findHelpScreens/QuickTipsScreens/QuickTips";
import InjuryPainCare from "../findHelpScreens/InjuryPainCareScreens/InjuryPainCare";
import DealWithWorries from "../findHelpScreens/DealWithWorries";
import HealthcareTeam from "../findHelpScreens/HealthcareTeamScreens/HealthcareTeam";
import SelfCare from "../findHelpScreens/selfCareScreens/SelfCare";
import QuizMain from "../QuizScreens/QuizMain";
import QuizResults from "../QuizScreens/QuizResults";
import ResourceScreen from "../drawerScreens/resourceScreens/ResourceScreen";
import GlossaryScreen from "../drawerScreens/glossaryScreens/GlossaryScreen";

const StackNav = createStackNavigator(
    {
        Home: MainScreen,
        LearnMore: LearnMoreList,
        FindHelp: FindHelpList,
        Quiz: QuizMain,
        QuizResults: QuizResults,
        NotAlone: YoureNotAlone,
        Reactions: ReactionsToInjury,
        TraumaticStressReactions: TraumaticStressReactions,
        HowLong: HowLongScreen,
        InjuryPainCare: InjuryPainCare,
        WhenToGetHelp: WhenToGetOutsideHelpScreen,
        DealWorries: DealWithWorries,
        HealthTeam: HealthcareTeam,
        HowToTalk: HowToTalk,
        QuickTips: QuickTips,
        SelfCare: SelfCare
    },
    {
        defaultNavigationOptions: {
            headerTruncatedBackTitle: translate("mainScreen.backButton"),
            headerTitleStyle: {
                fontStyle: null,
                fontWeight: null
            }
        }
    }
);

const GlossaryNav = createStackNavigator({
    Glossary: GlossaryScreen
},
{
    defaultNavigationOptions: {
        headerTitleStyle: {
            fontStyle: null,
            fontWeight: null
        }
    }
}
);

const ResourceNav = createStackNavigator(
{
    Resources: ResourceScreen
},
{
    defaultNavigationOptions: {
        headerTitleStyle: {
            fontStyle: null,
            fontWeight: null
        }
    }
}
);

const DrawerNav = createDrawerNavigator({
    Home: {
        screen: StackNav,
        navigationOptions:
        /* istanbul ignore next */
        () => ({ title: translate("drawerNavigator.home") })
    },

    Resources: {
        screen: ResourceNav,
        navigationOptions:
        /* istanbul ignore next */
        () => ({
            title: translate("drawerNavigator.resources")
        })
    },

    Glossary: {
        screen: GlossaryNav,
        navigationOptions:
            /* istanbul ignore next */
            () => ({
                title: translate("drawerNavigator.glossary"),
            })
    }}, 
    {
        contentOptions: {
            labelStyle: {
                fontStyle: null,
                fontWeight: null,
                fontFamily: "avenir-heavy"
            }
        }
    });

const mainStack = createStackNavigator(
    {
        Drawer: DrawerNav
    },
    {
        headerMode: "none"
    }
);

const MainContainer = createAppContainer(mainStack);

export default class MainNavigator extends Component {
    /* istanbul ignore next */
    render() {
        return (
            <MainContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}
