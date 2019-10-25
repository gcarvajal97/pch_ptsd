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
    headerTitle: 'Reaction Screen'
  }

  render() {
    return (
      <View style={styles.container}>
              <Center>
                <Text>
                As you think about how to help your child, try{'\n'}
                to separate what you are feeling from your{'\n'}
                child's experiences and needs.{'\n'}
                </Text>
              </Center>
        </View>
    );
  }
}

export default QuizScreen;