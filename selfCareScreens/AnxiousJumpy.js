import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class AnxiousJumpy extends Component {

  render() {
    return (
            <Text>

                <Text style={styles.title}>
                    HYPER-AROUSAL SYMPTOMS{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                {"\n"}"I find myself worrying a lot that something else bad will happen - or worry a lot about my child being safe."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}Being on the lookout for danger makes sense after something scary has happened. It's how we learn to keep ourselves safe from things that are truly dangerous.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Do you feel this way so strongly, or so much of the time that it is getting in the way of you getting back to normal activities? Does your worry make it harder for you to help your child get back into normal activities?{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    {"\n"}"I have noticed myself being over-protective of my child since the injury."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}All parents want to keep their children safe. An injury can be a harsh reminder that we can't protect our children from every danger 100% of the time. It's normal to feel like tightening up the controls afterwards, and some things may make sense (e.g. paying more attention to safety rules).{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Do you feel this way so strongly, or so much of the time, that you can't let your child get back to normal activities appropriate for his/ her age?{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                {"\n"}"I startle more easily." (e.g., jump at a sudden noise){"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}A frightening experience can trigger an exaggerated physical startle response that takes some time to go away.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Are you so jumpy that it's really hard to relax? Is it affecting your sleep or ability to concentrate?{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    {"\n"}"I have been irritable or get angry more easily than before."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}Stress and fatigue can lead to feeling irritable. And if you're feeling jumpy or nervous it may be harder to deal with frustrations.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Is irritability making it hard for you to get along with family or friends? Is this a big change in how you usually deal with stress or frustrations?{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                {"\n"}"I have trouble concentrating."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}When we are under a lot of stress, feel really jumpy or on guard, or have distressing thoughts popping into mind, it can be hard to pay attention at times.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Is difficulty concentrating getting in the way of being able to do your work, make decisions, or take care of your family?{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    {"\n"}"I have had trouble sleeping."{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    {"\n"}Why it happens: {"\n"}Sleep problems can be a temporary reaction to disruptions in your life. Feeling jumpy or on guard, or having lots of worried thoughts running through your mind, can make it hard to relax into sleep.{"\n"}
                    {"\n"}Is this a problem?: {"\n"}Are you having a hard time falling asleep or staying asleep many nights? Is this interfering with feeling rested and able to function well during the day?{"\n"}
                </Text>                
                
            </Text>
    );
  }
}

export default AnxiousJumpy;

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