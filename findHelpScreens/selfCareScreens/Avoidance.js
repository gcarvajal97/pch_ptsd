import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class Avoidance extends Component {

  render() {
    return (
            <View>

                
                <Text style={styles.paragraphTitle}>
                    "I don't want to talk or think about what happened."
                </Text>

                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    Everyone needs to take a break sometimes from thinking about or 
                    talking about a scary experience or traumatic event.
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Do you never want to think or talk about it with anyone, 
                    or does talking about it make you feel very upset?
                </Text>

                <Text style={styles.paragraphTitle}>
                    "I want to stay away from people, places, or things that are reminders of what happened."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    After something scary happens, reminders of what happened can make us feel 
                    very anxious, and we might start to avoid those things.
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Is avoiding reminders stopping you from doing things you think you 
                    should be able to do, or from enjoying activities even if you force yourself to do them?
                </Text>

                <Text style={styles.paragraphTitle}>
                    "I have lost interest in activities I usually enjoy, since the injury."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    One way we cope with overwhelming scary experiences is to 
                    "shut down" our emotions for a while.
                </Text>
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Are there lots of thing you used to enjoy that you 
                    just don't feel like dong now? Are you feeling emotionally "numb" much of the time?
                </Text>

                <Text style={styles.paragraphTitle}>
                    "I just don't feel like being with people, since the injury."
                </Text>
                <Text style={styles.paragraphBold}>
                    Why it happens:
                </Text>
                <Text style={styles.paragraph}>
                    One way we cope with overwhelming scary experiences is to "shut down" 
                    our emotions and not feel close to other people for a while.
                </Text> 
                <Text style={styles.paragraphBold}>
                    Is this a problem?:
                </Text>  
                <Text style={styles.paragraph}>
                    Are you having a really hard time feeling relaxed and close to 
                    friends and family you usually trust and like to spend time with?
                </Text>                
                
            </View>
    );
  }
}

export default Avoidance;

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