import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class UsingCrutchesScreen extends Component {
  render() {
    return (
      <View>
          <Text style={styles.paragraph}>
          For hip, leg, knee, ankle, or foot injuries, your healthcare provider may order crutches to decrease pain, speed recovery, and help with walking. Make sure that a trained healthcare professional fits your child for child-sized crutches and teaches your child how to use them.
          </Text>

          <Text style={styles.paragraph}>Ask your healthcare provider for specific signs and symptoms that should alert you to call them right away. They may include the following:</Text>

          <Text style={styles.paragraph}>Follow instructions provided by your healthcare provider (doctor or nurse practitioner) It is important that your child follow all of the special instructions given by your healthcare provider to make sure that your child heals completely. If you have any questions or concerns about the fit of your child's crutches or what should or should not do while on crutches, please contact your healthcare provider.</Text>

          <Text style={styles.paragraphTitle}> General tips:</Text>
          <Text style={styles.paragraph}>-Remind your child that crutches are not toys or weapons.</Text>
          <Text style={styles.paragraph}>-Even if your child may be feeling better, make sure to use the crutches as long as your healthcare provider told you to use them. If you start putting weight on the leg too soon, you might cause a new injury or increase the recovery time.</Text>

          <Text style={styles.paragraphTitle}> Precautions – your child should:</Text>
          <Text style={styles.paragraph}>-Be very careful on slick or wet surfaces (like in the kitchen and the bathroom).</Text>
          <Text style={styles.paragraph}>-Be careful of throw rugs that can slip. They should be removed.</Text>
          <Text style={styles.paragraph}>-Never hop around holding on to furniture; it may slide or fall.</Text>
          <Text style={styles.paragraph}>-Keep the crutches nearby so they are always in reach.</Text>
          <Text style={styles.paragraph}>-Wear low-heeled shoes (like sneakers) that will not slip off.</Text>
          <Text style={styles.paragraph}>-Be careful of ramps or slopes. It is harder to walk with crutches on ramps or slopes.</Text>
          <Text style={styles.paragraph}>-Do not remove any parts of the crutches, including the rubber tips.</Text>
          <Text style={styles.paragraph}>-If they feel uncomfortable on crutches, ask someone to help. For example, someone can carry their books.</Text>

          <Text style={styles.paragraphTitle}>Helpful Hints</Text>
          <Text style={styles.paragraph}>-A bedside toilet may be used.</Text>
          <Text style={styles.paragraph}>-Ask teachers in school to let your child out of class a little early to avoid crowds on the stairs.</Text>
          <Text style={styles.paragraph}>-Keep the "bad" leg up on a stool while sitting.</Text>
          <Text style={styles.paragraph}>-Carry schoolbooks in a backpack to leave both hands free and ask a friend to carry it for you, if possible.</Text>
          <Text style={styles.paragraph}>-Avoid leaning on the underarm pieces.</Text>
          <Text style={styles.paragraph}>-If your child's school is more than two stories tall, ask if your child can have a key to the elevator.</Text>
                  
          <Text style={styles.paragraphTitle}>Make sure to ask your healthcare provider:</Text>
          <Text style={styles.paragraph}>-How long will my child need to be on crutches?</Text>
          <Text style={styles.paragraph}>-Can my child bear any weight on his injured leg?</Text>
          <Text style={styles.paragraph}>-What are the limits to my child's activity while he is on crutches?</Text>
          <Text style={styles.paragraph}>-What are the limits on my child's activity once he is off of his crutches?</Text>
          <Text style={styles.paragraph}>-When can my child return to school?</Text>
          <Text style={styles.paragraph}>-When can my child return to gym class? to contact sports? to biking? or to rough play?</Text>
          <Text style={styles.paragraph}>-Will my child need physical therapy?</Text>
          <Text style={styles.paragraph}>-Will this injury affect my child's growth?</Text>
                  
          <Text style={styles.paragraphTitle}>When to call your healthcare provider</Text>
          <Text style={styles.paragraph}>-Your child has increasing pain and pain medicine recommended or prescribed by your healthcare provider is not helping.</Text>
          <Text style={styles.paragraph}>-Your child feels numbness or tingling in his arms.</Text>
          <Text style={styles.paragraph}>-If you have any other concerns.</Text>
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
  }
});