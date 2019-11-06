import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NavigationService from './NavigationService';
import MainScreen from '../screens/MainScreen';
import QuizScreen from '../screens/QuizScreen';
import YoureNotAlone from '../learnMoreScreens/YoureNotAlone';
import ReactionsToInjury from '../learnMoreScreens/ReactionsToInjury';
import LearnMoreList from '../screens/LearnMoreList';
import TraumaticStressReactions from '../learnMoreScreens/TraumaticStressReactions';
import HowLongScreen from '../learnMoreScreens/HowLongScreen';
import FindHelpList from '../screens/FindHelpList';
import HowToTalk from '../findHelpScreens/HowToTalk';
import QuickTips from '../findHelpScreens/QuickTips';

// StackNavigator: This navigator controls the flow from the main screen to other screens and back (Stack)
// This is called by the DrawerNavigator, so it is sort of nested inside
const NavigationBar = createStackNavigator({
    Home: MainScreen,
    LearnMore: LearnMoreList,
    FindHelp: FindHelpList,
    Quiz: QuizScreen,
    NotAlone: YoureNotAlone,
    Reactions: ReactionsToInjury,
    TraumaticStressReactions: TraumaticStressReactions,
    HowLong: HowLongScreen,
    HowToTalk: HowToTalk,
    QuickTips: QuickTips,
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