import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NavigationService from './NavigationService';
import MainScreen from '../mainAndLists/MainScreen';
import YoureNotAlone from '../learnMoreScreens/YoureNotAlone';
import ReactionsToInjury from '../learnMoreScreens/ReactionsToInjury';
import LearnMoreList from '../mainAndLists/LearnMoreList';
import TraumaticStressReactions from '../learnMoreScreens/TraumaticStressReactions';
import FindHelpList from '../mainAndLists/FindHelpList';
import WhenToGetOutsideHelpScreen from '../findHelpScreens/outsideHelpScreens/WhenToGetOutsideHelp';
import HowLongScreen from '../learnMoreScreens/HowLongScreen';
import HowToTalk from '../findHelpScreens/HowToTalk';
import QuickTips from '../findHelpScreens/QuickTipsScreens/QuickTips';
import InjuryPainCare from '../findHelpScreens/InjuryPainCareScreens/InjuryPainCare';
import DealWithWorries from '../findHelpScreens/DealWithWorries';
import HealthcareTeam from '../findHelpScreens/HealthcareTeamScreens/HealthcareTeam';
import ResourcesScreen from '../drawerScreens/resourcesScreens/ResourceScreen'
import SelfCare from '../findHelpScreens/selfCareScreens/SelfCare';
import QuizMain from '../QuizScreens/QuizMain';
import QuizResults from '../QuizScreens/QuizResults';

// StackNavigator: This navigator controls the flow from the main screen to other screens and back (Stack)
// This is called by the DrawerNavigator, so it is sort of nested inside
const NavigationBar = createStackNavigator({
    Home: MainScreen,
    LearnMore: LearnMoreList,
    FindHelp: FindHelpList,
    Quiz: QuizMain,
    QuizResults: QuizResults, // un-comment when page is ready to test
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
    SelfCare: SelfCare,
    Resources: ResourcesScreen
  });
  
  // New in this version of React Native, must be created and reference/returned
  const StackContainer = createAppContainer(NavigationBar);

  // The navigator now sends its references to the NavigationService
  export default class StackNavigator extends Component {
      render() {
          return <StackContainer
          ref={navigatorRef => {
            NavigationService.setStackLevelNavigator(navigatorRef);
          }}/>
      }
  }