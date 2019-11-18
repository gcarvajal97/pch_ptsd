import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class RelivingWhat extends Component {

  render() {
    return (
            <View>

                <Text style={styles.paragraphTitle}>
                    "I think a lot about what happened to my child."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    Thinking and talking about what happened, especially in the first 
                    few days and weeks, is part of how we help ourselves recover from a scary experience 
                    or traumatic event.
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>
                <Text style={styles.paragraph}>
                    Do thoughts about the traumatic event often pop into your mind 
                    even when you don't want them to? Do the thoughts bother or upset you?
                </Text>
                
                <Text style={styles.paragraphTitle}>
                    "I have had bad dreams or nightmares since the injury."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    In a stressful time, it's not unusual to have a few bad dreams.                
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Are the nightmares interfering with getting a good night's sleep?
                </Text>
                
                <Text style={styles.paragraphTitle}>
                    "I get upset or have physical symptoms (headache, stomachache, heart beating fast) 
                    at reminders of what happened."
                </Text> 
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    When something scary happens, we learn to treat things connected 
                    to it as if they were danger signals. Sights, sounds, and even smells can be reminders.
                </Text> 
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Do these feelings happen nearly every day? Do they make it hard 
                    for you to relax, or to concentrate on things you have to do at home or at work?
                </Text>             
                
            </View>
    );
  }
}

export default RelivingWhat;

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
    }
  });