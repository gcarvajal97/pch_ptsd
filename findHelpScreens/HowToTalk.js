import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

class HowToTalk extends Component {
  
  static navigationOptions = {
    headerTitle: 'Find Help'
  }

  render() {
    return (
      <View style={styles.container}>
                <Text>
                    This is the How To Talk screen{'\n'}
                </Text>
        </View>
    );
  }
}

export default HowToTalk;