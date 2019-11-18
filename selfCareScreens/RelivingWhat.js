import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class RelivingWhat extends Component {

  render() {
    return (
            <Text>

                <Text style={styles.subTitle}>
                    "I think a lot about what happened to my child."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    Why it happens: {"\n"}Thinking and talking about what happened, especially in the first 
                    few days and weeks, is part of how we help ourselves recover from a scary experience 
                    or traumatic event.{"\n"}
                    Is this a problem?: {"\n"}Do thoughts about the traumatic event often pop into your mind 
                    even when you don't want them to? Do the thoughts bother or upset you?{"\n"}
                </Text>
                <Text style={styles.subTitle}>
                    "I have had bad dreams or nightmares since the injury."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    Why it happens: {"\n"}In a stressful time, it's not unusual to have a few bad dreams.{"\n"}
                    Is this a problem?: {"\n"}Are the nightmares interfering with getting a good night's sleep?{"\n"}
                </Text>
                <Text style={styles.subTitle}>
                    "I get upset or have physical symptoms (headache, stomachache, heart beating fast) 
                    at reminders of what happened."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    Why it happens: {"\n"}When something scary happens, we learn to treat things connected 
                    to it as if they were danger signals. Sights, sounds, and even smells can be reminders.{"\n"}
                    Is this a problem?: {"\n"}Do these feelings happen nearly every day? Do they make it hard 
                    for you to relax, or to concentrate on things you have to do at home or at work?
                </Text>
                
            </Text>
    );
  }
}

export default RelivingWhat;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      margin: 10,
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
  },
  title: {
      backgroundColor: 'white', 
      color: '#2089DC', 
      fontWeight: 'bold', 
      fontSize: 22, 
      textAlign: 'left', 
      alignSelf: 'stretch'
  },
  subTitle: {
    backgroundColor: 'white', 
    color: '#2089DC', 
    alignSelf: 'stretch', 
    paddingLeft: 15, 
    paddingRight:15, 
    fontSize: 15, 
    borderBottomWidth:2, 
    borderBottomColor:'#2089DC',
  },
  paragraph: {
      alignSelf:"center", 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 14,
      marginTop: 5,
  },
});