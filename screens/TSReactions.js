import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

class QuizScreen extends Component {
  
  static navigationOptions = {
    headerTitle: 'Quiz Screen'
  }

  render() {
    return (
      <View style={styles.container}>
                <Text>
                    This is the Traumatic Stress Reaction Screen{'\n'}
                </Text>
        </View>
    );
  }
}

export default QuizScreen;