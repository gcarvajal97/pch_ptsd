import React, { Component } from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

export default class WhenAndHowToLookForYourself extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragraph}>Sometimes parents need extra help too. </Text>
        <Text style={styles.paragraphTitle}>Do you have traumatic stress symptoms that:</Text>
        <Text style={styles.paragraph}>-Get in the way of getting back to usual activities?</Text>
        <Text style={styles.paragraph}>-Stop you from enjoying things you used to enjoy?</Text>
        <Text style={styles.paragraph}>-Seem to be getting worse rather than better?</Text>
        <Text style={styles.paragraph}>-Have lasted more than a month?</Text>
        <Text style={styles.paragraph}>
        If so, you may want to seek out a professional who can help you.
        </Text>
        <Text style={styles.paragraphTitle}>Remember to ask questions</Text>
        <Text style={styles.paragraph}>
        When looking for a counselor or therapist to help with 
        traumatic stress symptoms, remember to ask questions such as:  
        </Text>
        <Text style={styles.paragraph}>-Do you have experience working with people after trauma?</Text>
        <Text style={styles.paragraph}>-What is your approach to working with this type of problem?</Text>
        <Text style={styles.paragraph}>-What is your success rate?</Text>
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