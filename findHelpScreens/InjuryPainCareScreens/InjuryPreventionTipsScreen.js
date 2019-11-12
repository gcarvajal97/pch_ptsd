import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default class InjuryPreventionTipsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Each year, one in every four children is treated by a doctor because of an injury such as a fall from a bicycle 
        or an animal bite. Some of these injuries are minor, but many of them are very serious.
        You can’t always stop your children from getting bumps and bruises but you can reduce the chances that they’ll 
        be seriously injured by taking safety precautions such as always buckling up in motor vehicles.
        <Text onPress={()=> Linking.openURL('https://www.chop.edu/centers-programs/injury-prevention-program')}> Click here </Text>
        to find more safety tips on topics such as child passenger safety, bicycle safety, dog bites, falls, pedestrian 
        safety, fire safety, water safety and more.
        Full recovery goes beyond physical healing - learn more about your child's emotional recovery after an injury, 
        and how you can help.
        </Text>
        </View>
    );
  }
}