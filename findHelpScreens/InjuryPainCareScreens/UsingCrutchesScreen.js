import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default class UsingCrutchesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          For hip, leg, knee, ankle, or foot injuries, your healthcare provider may order crutches to decrease pain, speed recovery, and help with walking. Make sure that a trained healthcare professional fits your child for child-sized crutches and teaches your child how to use them.

          Ask your healthcare provider for specific signs and symptoms that should alert you to call them right away. They may include the following:

              Follow instructions provided by your healthcare provider (doctor or nurse practitioner) It is important that your child follow all of the special instructions given by your healthcare provider to make sure that your child heals completely. If you have any questions or concerns about the fit of your child's crutches or what should or should not do while on crutches, please contact your healthcare provider.

              General tips:
                  Remind your child that crutches are not toys or weapons.
                  Even if your child may be feeling better, make sure to use the crutches as long as your healthcare provider told you to use them. If you start putting weight on the leg too soon, you might cause a new injury or increase the recovery time.

              Precautions – your child should:
                  Be very careful on slick or wet surfaces (like in the kitchen and the bathroom).
                  Be careful of throw rugs that can slip. They should be removed.
                  Never hop around holding on to furniture; it may slide or fall.
                  Keep the crutches nearby so they are always in reach.
                  Wear low-heeled shoes (like sneakers) that will not slip off.
                  Be careful of ramps or slopes. It is harder to walk with crutches on ramps or slopes.
                  Do not remove any parts of the crutches, including the rubber tips.
                  If they feel uncomfortable on crutches, ask someone to help. For example, someone can carry their books.

              Helpful Hints
                  A bedside toilet may be used.
                  Ask teachers in school to let your child out of class a little early to avoid crowds on the stairs.
                  Keep the "bad" leg up on a stool while sitting.
                  Carry schoolbooks in a backpack to leave both hands free and ask a friend to carry it for you, if possible.
                  Avoid leaning on the underarm pieces.
                  If your child's school is more than two stories tall, ask if your child can have a key to the elevator.
                  
              Make sure to ask your healthcare provider:
                  How long will my child need to be on crutches?
                  Can my child bear any weight on his injured leg?
                  What are the limits to my child's activity while he is on crutches?
                  What are the limits on my child's activity once he is off of his crutches?
                  When can my child return to school?
                  When can my child return to gym class? to contact sports? to biking? or to rough play?
                  Will my child need physical therapy?
                  Will this injury affect my child's growth?
                  
              When to call your healthcare provider
                  Your child has increasing pain and pain medicine recommended or prescribed by your healthcare provider is not helping.
                  Your child feels numbness or tingling in his arms.
                  If you have any other concerns.
                  
              For more information and resources on injury care, click here.
              
              Decrease your child's risk of future injuries.
              Click here for more information.
              
              Full recovery goes beyond physical healing - learn more about your child's emotional recovery after an injury, and how you can help.
        </Text>
      </View>
    );
  }
}