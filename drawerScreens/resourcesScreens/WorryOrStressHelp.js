import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";

export default class WorryAndStressScreen extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.aap.org/stress/')}
        accessible
        accessibilityLabel="Click here to get more information from the American Academy of Pediatrics"
        accessibilityHint="Navigates to The American Academy of Pediatrics page on Children, Teens, and Resiliency">
        American Academy of Pediatrics – Children, Teens, and Resiliency
        </Text>
      {"\n"}American Academy of Pediatrics – Children, Teens, and Resiliency has information 
      to help teens and families cope with the pressures of day-to-day life.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.worrywisekids.org/')}
        accessible
        accessibilityLabel="Click here to visit the Worry Wise Kids official page"
        accessibilityHint="Navigates to Worry Wise Kids homepage">
        Worry Wise Kids
        </Text>
      {"\n"}Worry Wise Kids has information to help children with excessive worries or fears. 
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
  bullet: {
      marginVertical:1, 
      marginHorizontal:18, 
      textAlign:'left', 
      alignSelf:'stretch', 
      fontWeight:'bold',
      fontSize:14
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
      alignSelf:"center", 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 16,
      fontWeight: 'bold',
      color:'#2089DC',
      textDecorationLine: 'underline',
      marginTop: 4,
      marginTop: 3,
  },
  image: {
    flex: 1,
    aspectRatio: 1.40,
    resizeMode: 'contain'
  }
});