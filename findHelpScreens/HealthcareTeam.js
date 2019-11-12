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
    headerTitle: 'Find Help'
  }

  render() {
    return (
      <View style={styles.container}>
                <Text>
                    Working with your childs healthcare team{'\n'}
                    In the Emergency Dept.{'\n'}
                    In the hospital{'\n'}
                    After the hospital{'\n'}
                    (to be collapsible/expandable)
                </Text>
        </View>
    );
  }
}

export default QuizScreen;