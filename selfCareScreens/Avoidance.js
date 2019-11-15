import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class Avoidance extends Component {

  render() {
    return (
            <Text>

                <Text style={styles.title}>
                    AVOIDANCE SYMPTOMS{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    {"\n"}"I don't want to talk or think about what happened."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}Everyone needs to take a break sometimes from thinking about or 
                    talking about a scary experience. 
                    or traumatic event.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Do you never want to think or talk about it with anyone, 
                    or does talking about it make you feel very upset?{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    {"\n"}"I want to stay away from people, places, or things that are reminders of what happened."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}After something scary happens, reminders of what happened can make us feel 
                    very anxious, and we might start to avoid those things.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Is avoiding reminders stopping you from doing things you think you 
                    should be able to do, or from enjoying activities even if you force yourself to do them?{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    {"\n"}"I have lost interest in activities I usually enjoy, since the injury."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}One way we cope with overwhelming scary experiences is to 
                    "shut down" our emotions for a while.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Are there lots of thing you used to enjoy that you 
                    just don't feel like dong now? Are you feeling emotionally "numb" much of the time?{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    {"\n"}"I just don't feel like being with people, since the injury."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}One way we cope with overwhelming scary experiences is to "shut down" 
                    our emotions and not feel close to other people for a while.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Are you having a really hard time feeling relaxed and close to 
                    friends and family you usually trust and like to spend time with?
                </Text>                
                
            </Text>
    );
  }
}

export default Avoidance;

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