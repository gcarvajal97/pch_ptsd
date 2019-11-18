import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AdbominalTraumaScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>
        Abdominal trauma involves injury to the belly between the chest and the hips and the internal organs there – the most common injuries to organs in the belly include the small intestine, liver, spleen, pancreas, kidneys, and bladder.
        </Text>
        <Text style={styles.paragraph}>
        Follow instructions provided by your healthcare provider (doctor or nurse practitioner). It is important that your child follow all of the special instructions given by your healthcare provider to decrease any risk of bleeding inside.
        </Text>
        <Text style={styles.paragraphTitle}>Make sure to ask your healthcare provider:</Text>
        <Text style={styles.paragraph}>-How long should my child only have minimal activity or "house arrest"? This will generally depend on the grade of injury to your child's organ or how severe it was. Your doctor will tell you what minimal activity means. It could include activities such as quiet play, reading, coloring, and watching TV. It probably means that your child will have to avoid sports for a period of time.</Text>
        <Text style={styles.paragraph}>-When can my child return to school?</Text>
        <Text style={styles.paragraph}>-When can my child start gym? contact sports? biking? or rough play?</Text>
        <Text style={styles.paragraph}>-This will also depend on the grade of injury to your child's organ or how severe it was.</Text>
        <Text style={styles.paragraph}>-What is the best number to call for emergencies during the week? On weekends?</Text>
                
        <Text style={styles.paragraphTitle}>When to call your healthcare provider:</Text>
        <Text style={styles.paragraph}>-Ask your healthcare provider for specific signs and symptoms that should alert you to call them right away. They may include signs of intra-abdominal bleeding (bleeding in the belly) such as:</Text>
        <Text style={styles.paragraph}>-Looking pale</Text>
        <Text style={styles.paragraph}>-Lethargy (hard to keep awake)</Text>
        <Text style={styles.paragraph}>-Blood in urine, stools (bowel movement) or vomitus (throw up)</Text>
        <Text style={styles.paragraph}>-Fever (temperature greater than 101 degrees Fahrenheit or 38.5 degrees Celsius)</Text>
        <Text style={styles.paragraph}>-Increased pain</Text>
        <Text style={styles.paragraph}>-Vomiting (or throwing up)</Text>
        <Text style={styles.paragraph}>-Any other concerns that you may have.</Text>
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