import React from 'react';
import MainNavigator from './components/MainNavigator';
import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props';
import { SplashScreen } from 'expo';

const customTextProps = { 
  style: { 
    fontFamily: "Avenir-Roman"
  }
}

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    SplashScreen.preventAutoHide();
    await Font.loadAsync({
      'Avenir-Roman': require('./assets/fonts/Avenir-Roman.ttf'),
      'Avenir-BookOblique': require('./assets/fonts/Avenir-BookOblique.ttf')
    });
    setCustomText(customTextProps);
    this.setState({fontLoaded: true});
  }

  render() {
    if(this.state.fontLoaded) {
      SplashScreen.hide();
    return (
      <MainNavigator/>
    );}

    if(!this.state.fontLoaded) {
      return null;
    }
}

}
