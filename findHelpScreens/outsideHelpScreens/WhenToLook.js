import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';


class WhenToLook extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragraphTitle}>
        Does your child have traumatic stress symptoms that:
        </Text>
        <Text style={styles.paragraph}>-Get in the way of getting back to usual activities?</Text>
        <Text style={styles.paragraph}>-Stop your child from enjoying things they used to enjoy?</Text>
        <Text style={styles.paragraph}>-Seem to be getting worse rather than better?</Text>
        <Text style={styles.paragraph}>-Have lasted more than a month?</Text>
        <Text style={styles.paragraphTitle}>
        Does your child:
        </Text>
        <Text style={styles.paragraph}>-Get physical symptoms if reminded of the injury or what happened?</Text>
        <Text style={styles.paragraph}>-Try not to talk about it?</Text>
        <Text style={styles.paragraph}>-Startle easily (for example, jumping at sudden noises)?</Text>
        <Text style={styles.paragraph}>-Get very distressed if reminded of the injury?</Text>
        <Text style={styles.paragraph}>
        If any of the above are true, it's a good idea to talk 
        with your doctor or another professional about 
        how your child is doing.
        </Text>
    </View>
    );
  }
}

export default WhenToLook;

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
  },
  link: {
    fontSize: 14,
    color:'#2089DC',
    textDecorationLine: 'underline',
  }
});