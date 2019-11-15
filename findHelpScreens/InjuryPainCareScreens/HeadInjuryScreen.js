import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default class HeadInjuryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Head injury is a broad term that describes injuries to the scalp, skull, brain, and tissue 
        and blood vessels in the child’s head. Some head injuries are also called brain injury, or 
        traumatic brain injury (TBI), depending on the extent of the head trauma. Concussion is the 
        most common type of TBI.

        A concussion is caused by a blow or jolt to the head or body that causes the brain to shake.
          The shaking can cause the brain not to work normally and can result in serious side effects.
          If your child hits her head, be aware of the concussion symptoms to look for, which are 
          commonly physical (such as a headache, nausea, or dizziness), sleep-related, difficulty 
          concentrating/remembering, or involve mood disruption.

        Initial treatment for a concussion is rest, both mental and physical, which allows the brain 
        time to heal. Every child’s injury and recovery is unique, but with guidance from a doctor, 
        your child can slowly return to school and to play following a concussion.
        
        For comprehensive information about concussion, including how a concussion is diagnosed, 
        prevention strategies, returning to school and play, and support resources, visit 
        <Text onPress={()=> Linking.openURL('https://www.chop.edu/centers-programs/concussion-care-minds-matter')}>
          Concussion Care for Kids: Minds Matter,</Text> a website developed by an interdisciplinary team of 
          concussion experts at The Children's Hospital of Philadelphia.

        Full recovery goes beyond physical healing – learn more about your child’s emotional recovery 
        after an injury, and how you can help.
        </Text>
        </View>
    );
  }
}