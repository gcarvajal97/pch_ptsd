import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class AnxiousJumpy extends Component {

  render() {
    return (
            <View>

                <Text style={styles.paragraphTitle}>
                    "I find myself worrying a lot that something else bad will happen - or worry a lot 
                    about my child being safe."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    Being on the lookout for danger makes sense after something 
                    scary has happened. It's how we learn to keep ourselves safe from things that are truly 
                    dangerous.
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Do you feel this way so strongly, or so much of the time 
                    that it is getting in the way of you getting back to normal activities? Does your worry 
                    make it harder for you to help your child get back into normal activities?
                </Text>

                <Text style={styles.paragraphTitle}>
                    "I have noticed myself being over-protective of my child since the injury."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    WAll parents want to keep their children safe. An injury can be 
                    a harsh reminder that we can't protect our children from every danger 100% of the time. 
                    It's normal to feel like tightening up the controls afterwards, and some things may make 
                    sense (e.g. paying more attention to safety rules).
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Do you feel this way so strongly, or so much of the time, 
                    that you can't let your child get back to normal activities appropriate for their age?
                </Text>

                <Text style={styles.paragraphTitle}>
                    "I startle more easily." (e.g., jump at a sudden noise)
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens: 
                </Text>
                <Text style={styles.paragraph}>
                    A frightening experience can trigger an exaggerated physical 
                    startle response that takes some time to go away.
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?: 
                </Text>  
                <Text style={styles.paragraph}>
                    Are you so jumpy that it's really hard to relax? Is it 
                    affecting your sleep or ability to concentrate?
                </Text>

                <Text style={styles.paragraphTitle}>
                    "I have been irritable or get angry more easily than before."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    Stress and fatigue can lead to feeling irritable. And if 
                    you're feeling jumpy or nervous it may be harder to deal with frustrations.
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Is irritability making it hard for you to get along with 
                    family or friends? Is this a big change in how you usually deal with stress or 
                    frustrations?
                </Text>

                <Text style={styles.paragraphTitle}>
                    "I have trouble concentrating."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    When we are under a lot of stress, feel really jumpy or on 
                    guard, or have distressing thoughts popping into mind, it can be hard to pay attention 
                    at times.
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Is difficulty concentrating getting in the way of being 
                    able to do your work, make decisions, or take care of your family?
                </Text>

                <Text style={styles.paragraphTitle}>
                    "I have had trouble sleeping."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    Sleep problems can be a temporary reaction to disruptions in 
                    your life. Feeling jumpy or on guard, or having lots of worried thoughts running through 
                    your mind, can make it hard to relax into sleep.
                </Text> 
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Are you having a hard time falling asleep or staying asleep 
                    many nights? Is this interfering with feeling rested and able to function well during 
                    the day?
                </Text>                
            </View>
    );
  }
}

export default AnxiousJumpy;

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