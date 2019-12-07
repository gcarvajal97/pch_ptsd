import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";

export default class PainAndInjuryCareScreen extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.orthoinfo.org/')}
        accessible
        accessibilityLabel="Click here to visit the American Academy of Orthopedic Surgeons official page"
        accessibilityHint="Navigates to American Academy of Orthopedic Surgeons homepage">
        American Academy of Orthopedic Surgeons
        </Text>
      {"\n"}The American Academy of Orthopedic Surgeons has a patient education library (including casts and crutches). 
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.amtrauma.org/')}
        accessible
        accessibilityLabel="Click here to visit The American Trauma Society official page"
        accessibilityHint="Navigates to American Trauma Society homepage">
        American Trauma Society
        </Text>
      {"\n"}The American Trauma Society has advocacy information on trauma care. 
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.biausa.org/')}
        accessible
        accessibilityLabel="Click here to visit Brain Injury Association of America official page"
        accessibilityHint="Navigates to Brain Injury Association of America homepage">
        Brain Injury Association of America
        </Text>
      {"\n"}The Brain Injury Association of America has information and advocacy on brain injury. 
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://health.nih.gov/')}
        accessible
        accessibilityLabel="Click here to visit National Institute of Health official page"
        accessibilityHint="Navigates to National Institute of Health homepage">
        National Institute of Health
        </Text>
      {"\n"}The National Institute of Health contains a glossary of health information.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.aboutkidshealth.ca/pain')}
        accessible
        accessibilityLabel="Click here to visit About Kids Health official page"
        accessibilityHint="Navigates to About Kids Health homepage">
        About Kids Health
        </Text>
      {"\n"}About Kids Health has information on assessing and treating pain in children from a pediatric hospital.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.pbs.org/parents/talkingwithkids/health/communicating_intro.html')}
        accessible
        accessibilityLabel="Click here to visit PBS Parents Guide to Talking With Kids About Health official page"
        accessibilityHint="Navigates to PBS Parents Guide to Talking With Kids About Health homepage">
        PBS Parents Guide to Talking With Kids About Health
        </Text>
      {"\n"}The NPBS Parents Guide to Talking With Kids About Health has tips on communicating 
      with kids about injury, illness, medicine, and going to the doctor.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL(
            'http://www.aboutkidshealth.ca/EN/RESOURCECENTRES/PAIN/Pages/default.aspx'
            )}
        accessible
        accessibilityLabel="Click here to visit Pain, Pain, Go Away official page"
        accessibilityHint="Navigates to Pain, Pain, Go Away homepage">
        Pain, Pain, Go Away
        </Text>
      {"\n"}Pain, Pain, Go Away has information on helping children with pain from a leading pediatric pain research group.
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