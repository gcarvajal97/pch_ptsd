import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default class AdbominalTraumaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Abdominal trauma involves injury to the belly between the chest and the hips and the internal organs there – the most common injuries to organs in the belly include the small intestine, liver, spleen, pancreas, kidneys, and bladder.

        Click here for a glossary with information on anatomy and types of injury.

            Follow instructions provided by your healthcare provider (doctor or nurse practitioner). It is important that your child follow all of the special instructions given by your healthcare provider to decrease any risk of bleeding inside.
            
            Make sure to ask your healthcare provider:
                How long should my child only have minimal activity or "house arrest"? This will generally depend on the grade of injury to your child's organ or how severe it was. Your doctor will tell you what minimal activity means. It could include activities such as quiet play, reading, coloring, and watching TV. It probably means that your child will have to avoid sports for a period of time.
                When can my child return to school?
                When can my child start gym? contact sports? biking? or rough play?
                This will also depend on the grade of injury to your child's organ or how severe it was.
                What is the best number to call for emergencies during the week? On weekends?
                
            When to call your healthcare provider:
                Ask your healthcare provider for specific signs and symptoms that should alert you to call them right away. They may include the following: Signs of intra-abdominal bleeding (bleeding in the belly) such as:
                Looking pale
                Lethargy (hard to keep awake)
                Blood in urine, stools (bowel movement) or vomitus (throw up)
                Fever (temperature greater than 101 degrees Fahrenheit or 38.5 degrees Celsius)
                Increased pain
                Vomiting (or throwing up)
                Any other concerns that you may have.
                
            For more information and resources on injury care, click here.
            
            Decrease your child's risk of future injuries.
            Click here for more information.
            
            Full recovery goes beyond physical healing - learn more about your child's emotional recovery after an injury, and how you can help.    
        </Text>
        </View>
    );
  }
}