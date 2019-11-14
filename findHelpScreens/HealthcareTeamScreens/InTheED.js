import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default class InTheED extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Being in the Emergency Department can be a scary and stressful experience for injured children and their parents. Parents have many worries and questions and it can sometimes be difficult to get all of the answers right away. Communicating well and often with the ED medical team about your child will help them provide your child with the best possible treatment. It can also help you play a more active role in your child's care.

        Working with the Health Care Team - Suggestions from Other Parents:

            Don't be afraid to ask questions. If you don't understand the answer, let the medical team know and ask, again.
            Stay with your child as much as possible. Ask permission to be with your child during medical tests and procedures, if you want to be.
            Be sure to let the medical team know of any pre-existing medical conditions, other special needs and fears, and allergies your child has, 
            as well as whatever you can tell them about how the injury happened.
            You are your child's most important advocate – ask how you can get involved in your child's care and when you can make decisions about treatment.
            Make sure to be an advocate for your child. For example, if your child is in pain, make sure to let your child's care team know.
            Emergency care takes a lot of patience. You may get frustrated that other children are seen before your child, 
            but this is likely because the staff has to make sure that the sickest patients are seen first.
            Tips for supporting your child in the Emergency Department

        Even in the midst of an emergency there are things that you can do to help support your child.

        Remember these 5 things:

            You are the best person to help your child. Be calm and reassuring. Hold his hand; distract him with a story or game, etc. 
            If needed, set rules and limits like you would at home.
            Help your child understand what is happening. Make sure that the healthcare team explains things in a way your child can understand. 
            Be honest but reassuring about what will happen. ("This will hurt now, but it will help you get better.")
            Allow your child to talk about worries or feelings. Encourage your child's healthcare team to talk with your child directly. 
            As much as possible, let your child answer for himself. Do not force your child to talk, but be there to listen when he is ready.
            Take care of yourself. Get support for yourself when you are worried and upset. Remember to eat and sleep!
            Ask for help from family and friends. Once your child has been discharged and you have returned home, 
            come back to this application for more information on ways parents can help their kids.
        </Text>
        </View>
    );
  }
}