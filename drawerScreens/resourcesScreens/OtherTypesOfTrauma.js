import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";

export default class OtherTypesOfTraumaScreen extends Component {

  render() {
    return (
      <View>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL(
        'http://www.militaryonesource.com/MOS/MilitaryFamiliesGateway.aspx'
        )}
        accessible
        accessibilityLabel="Click here to visit the Military OneSource official page"
        accessibilityHint="Navigates to Military OneSource homepage">
        Military OneSource
        </Text>
      {"\n"}
      Military OneSource has resources for military families, 
      including ways to help children prepare for and deal with a parent's deployment.
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('http://www.lotsahelpinghands.com/')}
        accessible
        accessibilityLabel="Click here to visit Lotsa Helping Hands official page"
        accessibilityHint="Navigates to Lotsa Helping Hands homepage">
        Lotsa Helping Hands
        </Text>
      {"\n"}Lotsa Helping Hands is a simple, immediate way for friends, 
      family, colleagues, and neighbors to assist loved ones in need.
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('http://www.nctsn.org/nccts/nav.do?pid=typ_tg')}
        accessible
        accessibilityLabel="Click here to visit the NCTSN official page"
        accessibilityHint="Navigates to The National Child Traumatic Stress Network homepage">
        Traumatic grief resources from the National Child Traumatic Stress Network
        </Text>
      {"\n"}
      The National Child Traumatic Stress Network is a network of academic and community-based centers providing education 
      and services for children and families who have experienced a traumatic event. This page has educational materials 
      for parents and professionals on childhood traumatic grief.
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('https://www.nimh.nih.gov/index.shtml')}
        accessible
        accessibilityLabel="Click here to visit the National Institute of Mental Health homepage"
        accessibilityHint="Navigates to National Institute of Mental Health offical page">
        The National Institute of Mental Health
        </Text>
      {"\n"}The National Institute of Mental Health has more information explaining what PTSD is, when it starts, 
      how long it lasts, and how to get help. 
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL(
        'http://www.redcross.org/local/hawaii/programs-services/disaster-preparedness'
        )}
        accessible
        accessibilityLabel="Click here to visit the Disaster Resources from the American Red Cross PDF"
        accessibilityHint="Navigates to Disaster Resources from the American Red Cross PDF">
        Disaster Resources from the American Red Cross
        </Text>
      {"\n"}Disaster Resources from the American Red Cross has information about helping 
      children cope with effects of disaster, and how to be prepared before a disaster. 
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL(
        'http://www.apa.org/news/press/releases/2005/01/tsunami.aspx'
        )}
        accessible
        accessibilityLabel="Click here to visit the Disaster Resources from the American Psychological Association page"
        accessibilityHint="Navigates to the Disaster Resources from the American Psychological Association page">
        Disaster Resources from the American Psychological Association
        </Text>
      {"\n"}Disaster Resources from the American Psychological Association has information and 
      tips for recovering from a natural disaster.
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL(
        'https://emergency.cdc.gov/coping/index.asp'
        )}
        accessible
        accessibilityLabel="Click here to visit the Disaster Resources from the Centers for Disease Control and Prevention page"
        accessibilityHint="Navigates to the Disaster Resources from the Centers for Disease Control and Prevention page">
        Disaster Resources from the Centers for Disease Control and Prevention
        </Text>
      {"\n"}Disaster Resources from the Centers for Disease Control and Prevention has information 
      for parents, children, and professionals on coping with a disaster. 
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('http://www.childwelfare.gov/can/index.cfm')}
        accessible
        accessibilityLabel="Click here to visit the Child Welfare Information Gateway homepage"
        accessibilityHint="Navigates to Child Welfare Information Gateway homepage">
        Child Welfare Information Gateway
        </Text>
      {"\n"}The Child Welfare Information Gateway has resources on a range of child maltreatment topics. 
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('http://www.thehotline.org/')}
        accessible
        accessibilityLabel="Click here to vist the Disaster Resources from the American Red Cross PDF"
        accessibilityHint="Navigates to Disaster Resources from the American Red Cross PDF">
        National Domestic Violence Hotline
        </Text>
      {"\n"}The National Domestic Violence Hotline is an anonymous 24/7 hotline that 
      provides support and assistance to victims of domestic violence.
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
    color:'#2089DC',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop: 4,
    marginTop: 3,
  },
  image: {
    flex: 1,
    aspectRatio: 1.40,
    resizeMode: 'contain'
  }
});