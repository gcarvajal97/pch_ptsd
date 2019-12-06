import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";

export default class InjuryPreventionScreen extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.nhtsa.dot.gov/')}
        accessible
        accessibilityLabel="Click here to visit the US National Highway Traffic Safety Administration official page"
        accessibilityHint="Navigates to US National Highway Traffic Safety Administration homepage">
        US National Highway Traffic Safety Administration
        </Text>
      {"\n"}The US National Highway Traffic Safety Administration has information on recalls and vehicle safety.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.cpsc.gov/')}
        accessible
        accessibilityLabel="Click here to visit US Consumer Products Safety Commission official page"
        accessibilityHint="Navigates to TUS Consumer Products Safety Commission homepage">
        US Consumer Products Safety Commission
        </Text>
      {"\n"}The US Consumer Products Safety Commission has information on recalls and product safety.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.cdc.gov/injury/index.html')}
        accessible
        accessibilityLabel="Click here to visit Centers for 
        Disease Control and Prevention: National Center on Injury Prevention and Control official page"
        accessibilityHint="Navigates to Centers for 
        Disease Control and Prevention: National Center on Injury Prevention and Control homepage">
        Centers for Disease Control and Prevention: National Center on Injury Prevention and Control
        </Text>
      {"\n"}The Centers for Disease Control and Prevention: National Center on Injury Prevention and Control
      have multiple topics on injury prevention.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.safekids.org/')}
        accessible
        accessibilityLabel="Click here to visit SafeKids Wordwide official page"
        accessibilityHint="Navigates to SafeKids Wordwide homepage">
        SafeKids Wordwide
        </Text>
      {"\n"}SafeKids Wordwide has multiple topics on injury prevention.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.teendriversource.org/')}
        accessible
        accessibilityLabel="Click here to visit Center for Injury Research 
        and Prevention at Children's Hospital of Philadelphia homepage on young drivers"
        accessibilityHint="Navigates to Center for Injury Research 
        and Prevention at Children's Hospital of Philadelphia homepage on young drivers">
        Center for Injury Research and Prevention at Children's Hospital of Philadelphia: Young Drivers
        </Text>
      {"\n"}Center for Injury Research and Prevention at Children's Hospital of Philadelphia 
      offers tools and tips for parents and teens to promote safe driving.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.cdc.gov/injury/index.html')}
        accessible
        ccessibilityLabel="Click here to visit Center for Injury Research 
        and Prevention at Children's Hospital of Philadelphia homepage on child passenger safety"
        accessibilityHint="Navigates to Center for Injury Research 
        and Prevention at Children's Hospital of Philadelphia homepage on child passenger safety">
        Center for Injury Research and Prevention at Children's Hospital of Philadelphia: Child Passenger Safety
        </Text>
      {"\n"}Center for Injury Research and Prevention at Children's Hospital of Philadelphia 
      offers tips to help families choose and install child restraint systems safely.
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