import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import translate from '../components/translateService';

class InjuryPainCare extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.paragraph}> Injury Pain Care Page </Text>
      </View>
    );
  }
}

export default InjuryPainCare;

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
      textAlign: 'center', 
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
      fontSize:25,
      alignSelf:'stretch',
      textAlign:'center',
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
      alignSelf:'center', 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize:14,
      marginTop:5,
      marginBottom:5,
  },
  link: {
      alignSelf:'center', 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 16,
      color:'#2089DC',
      textDecorationLine: 'underline',
      marginTop: 4,
      marginTop: 3,
  },
});