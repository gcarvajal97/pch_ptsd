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
                    This will be replaced by a UI and API to suggest if a child needs care.
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