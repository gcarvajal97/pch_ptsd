import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class SelfCareParents extends Component {

  render() {
    return (
        <View>
                <Text style={styles.paragraphTitle}>
                    Taking care of yourself: Re-experiencing
                </Text>
                <Text style={styles.paragraph}>-Talk with friends or family about your own experiences and feelings about your 
                    child's injury.</Text>
                <Text style={styles.paragraph}>-Help yourself deal with overwhelming or troubling thoughts by learning how to 
                    "take a break" from them at times - do something fun, spend time with friends, get 
                    busy with other activities.</Text>
                <Text style={styles.paragraph}>-If talking with your child about their reactions makes you feel upset or 
                    worried, it's especially important to find someone who can be a listening ear for 
                    you.</Text>

                <Text style={styles.paragraphTitle}>
                    Taking care of yourself: Avoidance
                </Text>
                <Text style={styles.paragraph}>-Notice when you feel worried or nervous - are there situations in which this 
                    seems to happen more?</Text>
                    <Text style={styles.paragraph}>-If avoiding reminders is keeping you from doing important things, enlist a 
                    friend or family member to help you - ask them to encourage you to keep doing those 
                    things and congratulate you when you do!</Text>
                    <Text style={styles.paragraph}>-Be especially careful that any new worries you might have don't stop you from 
                    letting your child do things that are safe and appropriate for their age. Use a 
                    friend or family member as a "reality check" for yourself.</Text>
                    <Text style={styles.paragraph}>-Try to make yourself do just one or two activities or spend time with friends, 
                    even if you don't really feel like it at first. Sometimes "just doing it" can be the 
                    first step to feeling a little better.</Text>

                <Text style={styles.paragraphTitle}>
                    Taking care of yourself: Hyper-Arousal
                </Text>
                <Text style={styles.paragraph}>-Remember that feeling a bit jumpy or worried is a natural reaction to going 
                    through something scary, and that it will get better with time.</Text>
                    <Text style={styles.paragraph}>-Even if you can only get a short break from caring for your child, home, work, 
                    use it to get some exercise and do things that relax you -- go for a walk, relax 
                    with a funny movie or a good book.</Text>
                    <Text style={styles.paragraph}>-Try to keep some daily routines the same.</Text>
                    <Text style={styles.paragraph}>-Try to get to bed at a regular time, and to make the hour before bed a 
                    relaxing time.</Text>
                    <Text style={styles.paragraph}>-Be especially careful not to increase your smoking or alcohol use to deal 
                    with stress.</Text>

                <Text style={styles.paragraphTitle}>
                    Getting extra help for yourself
                </Text>
                <Text style={styles.paragraph}>
                    -Think about getting some extra help if your own feelings and reactions after 
                    your child's injury are bothering you, or are making it harder for you to help your 
                    child get back into normal activities.
                </Text>   
        </View>             
    );
  }
}

export default SelfCareParents;

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