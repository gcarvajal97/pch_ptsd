import React from 'react';
import MainNavigator from './components/MainNavigator';

// Screen/View information has been moved to it's own file (MainScreen.js, OtherScreen.js, etc.)
// Now App class just calls the DrawerNav's container (as required in this newer React versions)
export default class App extends React.Component {
  render() {
    return (
      <MainNavigator/>
    );
  }
}
