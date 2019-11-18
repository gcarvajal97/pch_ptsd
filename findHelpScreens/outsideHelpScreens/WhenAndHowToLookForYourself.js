import React, { Component } from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

export default class WhenAndHowToLookForYourself extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragraph}>Sometimes parents need extra help too. </Text>
        <Text style={styles.paragraphTitle}>Do you have traumatic stress symptoms that:</Text>
        <Text style={styles.paragraph}>-Get in the way of getting back to usual activities?</Text>
        <Text style={styles.paragraph}>-Stop you from enjoying things you used to enjoy?</Text>
        <Text style={styles.paragraph}>-Seem to be getting worse rather than better?</Text>
        <Text style={styles.paragraph}>-Have lasted more than a month?</Text>
        <Text style={styles.paragraph}>
        If so, you may want to seek out a professional who can help you.
        </Text>
        <Text style={styles.paragraphTitle}>
        When looking for a counselor or therapist to help with 
        traumatic stress symptoms, remember to ask questions such as:   
        </Text>
        <Text style={styles.paragraph}>-Do you have experience working with people after trauma?</Text>
        <Text style={styles.paragraph}>-What is your approach to working with this type of problem?</Text>
        <Text style={styles.paragraph}>-What is your success rate?</Text>
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
  title: {
      backgroundColor: '#2089DC', 
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: 22, 
      alignSelf: 'stretch'
  },
  subTitle: {
    backgroundColor: '#2089DC', 
    color: 'white', 
    alignSelf: 'stretch', 
    paddingLeft: 15, 
    paddingRight:15, 
    fontSize: 15, 
    borderBottomWidth:2, 
    borderBottomColor:'#2089DC',
  },
  paragraphTitle: {
      fontWeight: 'bold',
      fontSize:20,
      alignSelf:'stretch',
      textAlign:'left',
      marginLeft:5,
      marginTop:4,
      marginBottom:3,
      color:'#2089DC'
  },
  bullet: {
      marginVertical:1, 
      marginHorizontal:18, 
      textAlign:'left', 
      alignSelf:'stretch', 
      fontWeight:'bold',
      fontSize:14
  },
  paragraph: {
      alignSelf:"stretch", 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 14,
      marginTop: 5,
  },
  link: {
      alignSelf:"center", 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 16,
      color:'#2089DC',
      textDecorationLine: 'underline',
      marginTop: 4,
      marginTop: 3,
  },
  image: {
    flex: 1,
    aspectRatio: 1.0,
    resizeMode: 'contain'
  }
});