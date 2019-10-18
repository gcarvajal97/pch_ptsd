import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class QuizScreen extends Component {
  
  static navigationOptions = {
    headerTitle: 'Quiz Screen'

  }

  render() {
    return (
      <View style={styles.container}>
                <Text>
                    This is a test Quiz Screen{'\n'}
                    Navigation bar should be showing a back button to return to home page.
                </Text>
        </View>
    );
  }
}

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});