import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";

export default class HowToLook extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragraph}>
        There are very good and helpful treatments for children who continue to have traumatic stress symptoms.
        </Text>
        <Text style={styles.paragraph}>
        If you are wondering how to find a child therapist, a good place to start is to talk 
        with your child's doctor or a counselor at your child's school. 
        They can help you figure out the best way of helping your child and your family, 
        and may be able to suggest a counselor or therapist experienced in helping 
        children with traumatic stress.
        </Text>
        <Text style={styles.paragraph}>
        When looking for a counselor or therapist to help your child 
        with traumatic stress symptoms, it's a good idea to ask 
        questions such as: Do you have experience working with 
        children after trauma? What is your approach to working 
        with this type of problem? What is your success rate? 
        How do you work with parents?
        </Text>
        <Text style={styles.paragraph}>
        {"\ "}
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.nctsnet.org/nccts/nav.do?pid=ctr_aud_prnt_gethelp')}
          accessible
          accessibilityLabel="Click here for mental health professional information"
          accessibilityHint="Navigates to a website on mental health professional information">
          The National Child Traumatic Stress Network
          </Text>
        {"\ "}has useful tips and information on how to find a mental health 
        professional to help your child and family after trauma.
        </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      margin: 10,
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
  },
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
  link: {
    fontSize: 14,
    color:'#2089DC',
    textDecorationLine: 'underline',
  },
  image: {
    flex: 1,
    aspectRatio: 0.90,
    resizeMode: 'contain'
  }
});