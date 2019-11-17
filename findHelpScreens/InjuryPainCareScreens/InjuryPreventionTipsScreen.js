import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Linking } from "expo";

export default class InjuryPreventionTipsScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>
        Each year, one in every four children is treated by a doctor because of an injury such as a fall from a bicycle 
        or an animal bite. Some of these injuries are minor, but many of them are very serious.
        You can’t always stop your children from getting bumps and bruises but you can reduce the chances that they’ll 
        be seriously injured by taking safety precautions such as always buckling up in motor vehicles.{"\ "}
        <Text style={styles.link} onPress={()=> Linking.openURL('https://www.chop.edu/centers-programs/injury-prevention-program')}accessible
          accessible
          accessibilityLabel="Click here for safety tips"
          accessibilityHint="Navigates to a website on safety tips">Click here</Text>
        {"\ "}to find more safety tips on topics such as child passenger safety, bicycle safety, dog bites, falls, pedestrian 
        safety, fire safety, water safety and more.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraphTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 3,
    color: '#2089DC'
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 14,
    marginVertical: 2,
  },
  paragraphBold: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 2,
    marginLeft: 10
  },
  link: {
    fontSize: 14,
    color:'#2089DC',
    textDecorationLine: 'underline',
  }
});