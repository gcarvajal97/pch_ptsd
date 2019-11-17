import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class InTheED extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>
          Being in the Emergency Department can be a scary and stressful experience for injured children and their parents.
          Parents have many worries and questions and it can sometimes be difficult to get all of the answers right away.
          </Text>
        <Text>
          Communicating well and often with the ED medical team about your child will help them provide your child with the best possible treatment.
          It can also help you play a more active role in your child's care.
          </Text>
        <Text style={styles.paragraphTitle}>Working with the Healthcare Team</Text>
          <Text style={styles.paragraph}>- Don't be afraid to ask questions. If you don't understand the answer, let the medical team know and ask, again.</Text>
          <Text style={styles.paragraph}>- Stay with your child as much as possible. Ask permission to be with your child during medical tests and procedures, if you want to be.</Text>
          <Text style={styles.paragraph}>- Be sure to let the medical team know of any pre-existing medical conditions, other special needs and fears, and allergies your child has,
            as well as whatever you can tell them about how the injury happened.
            </Text>
          <Text style={styles.paragraph}>- You are your child's most important advocate. Ask how you can get involved in your child's care and when you can make decisions about treatment.</Text>
          <Text style={styles.paragraph}>- Make sure to be an advocate for your child. For example, if your child is in pain, make sure to let your child's care team know.</Text>
          <Text style={styles.paragraph}>- Emergency care takes a lot of patience. You may get frustrated that other children are seen before your child,
          but this is likely because the staff has to make sure that the sickest patients are seen first.
            </Text>
            <Text style={styles.paragraphTitle}>Tips for supporting your child in the Emergency Department</Text>
            <Text style={styles.paragraph}>1.) You are the best person to help your child. Be calm and reassuring. Hold their hand; distract them with a story or game, etc.
          If needed, set rules and limits like you would at home.
          </Text>
          <Text style={styles.paragraph}>2.) Help your child understand what is happening. Make sure that the healthcare team explains things in a way your child can understand.
          Be honest but reassuring about what will happen ("This will hurt now, but it will help you get better.").
          </Text>
          <Text style={styles.paragraph}>3.) Allow your child to talk about worries or feelings. Encourage your child's healthcare team to talk with your child directly.
          As much as possible, let your child answer for themselves. Do not force your child to talk, but be there to listen when they are ready.
          </Text>
          <Text style={styles.paragraph}>4.) Take care of yourself. Get support for yourself when you are worried and upset. Remember to eat and sleep!
          </Text>
          <Text style={styles.paragraph}>5.) Ask for help from family and friends. Once your child has been discharged and you have returned home,
          come back to this application for more information on ways parents can help their kids.
          </Text>
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
    textAlign:'left',
    fontSize: 14,
    marginVertical:2,
  }
});