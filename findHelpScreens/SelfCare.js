import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



class SelfCare extends Component {
  
  static navigationOptions = {
    headerTitle: 'Find Help'
  }

  render() {
    return (
      <View style={styles.container}>
                <Text>
                    This is the Self Care Screen {'\n'}
                </Text>
        </View>
    );
  }
}

export default SelfCare;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });