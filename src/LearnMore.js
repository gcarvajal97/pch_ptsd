import React from 'react';
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

class LearnMore extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Learn More Page</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  LearnMore: {
    screen: LearnMore
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