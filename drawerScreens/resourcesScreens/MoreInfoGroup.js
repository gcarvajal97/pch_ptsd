import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";


export default class MoreInfoGroup extends Component {

  render() {
    return (
      <View>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('http://www.nctsn.org')}
        accessible
        accessibilityLabel="Click here to visit the NCTSN official page"
        accessibilityHint="Navigates to The National Child Traumatic Stress Network homepage">
        The National Child Traumatic Stress Network
        </Text>
      {"\n"}
      The National Child Traumatic Stress Network is a network of academic and community-based centers providing education 
      and services for children and families who have experienced a traumatic event.
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('http://www.istss.org/')}
        accessible
        accessibilityLabel="Click here to visit the ISTSS official page"
        accessibilityHint="Navigates to International Society for Traumatic Stress Studies homepage">
        The International Society for Traumatic Stress Studies
        </Text>
      {"\n"}The International Society for Traumatic Stress Studies is a professional membership organization that 
      promotes advancement and exchange of knowledge about severe stress and trauma.
      </Text>
      <Text style={styles.paragraph}>
      
      <Text style={styles.link} onPress={()=> Linking.openURL('http://www.ptsd.va.gov/')}
        accessible
        accessibilityLabel="Click here to visit the National Center for PTSD homepage"
        accessibilityHint="Navigates to the National Center for PTSD homepage">
        The National Center for PTSD
        </Text>
      {"\n"}The National Center for PTSD was developed originally to serve the needs of war veterans, 
      this organization also has resources for a broad range 
      of traumatic events for children and adolescents.
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('http://www.nlm.nih.gov/medlineplus/')}
        accessible
        accessibilityLabel="Click here to view Medline Plus articles"
        accessibilityHint="Navigates to a database containing Medline Plus articles from the NLM and NIH">
        Medline Plus
        </Text>
      {"\n"}Medline Plus contains Over 4,000 articles about diseases, tests, symptoms, and injuries 
      compiled by the US National Library of Medicine and the 
      National Institutes of Health.
      </Text>
      <Text style={styles.paragraph}>
      <Text style={styles.link} onPress={()=> Linking.openURL('https://www.nimh.nih.gov/index.shtml')}
        accessible
        accessibilityLabel="Click here to vist the National Institute of Mental Health homepage"
        accessibilityHint="Navigates to National Institute of Mental Health offical page">
        The National Institute of Mental Health
        </Text>
      {"\n"}The National Institute of Mental Health has more information explaining what PTSD is, when it starts, 
      how long it lasts, and how to get help. 
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