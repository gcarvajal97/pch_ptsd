import React from 'react';
import MainScreen from './MainScreen';
import {
  createAppContainer,
} from 'react-navigation';
import {
  createStackNavigator
} from 'react-navigation-stack'
import {
  StyleSheet, 
  View,
} from 'react-native';

class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz Page</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainScreen
  },
  Quiz: {
    screen: Quiz
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});