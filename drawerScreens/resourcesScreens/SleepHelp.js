import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";

export default class SleepHelpScreen extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('https://www.nasponline.org/')}
        accessible
        accessibilityLabel="Click here to visit the National Association of School Psychologists official page"
        accessibilityHint="Navigates to National Association of School Psychologists homepage">
        National Association of School Psychologists
        </Text>
      {"\n"}The National Association of School Psychologists has information 
      for parents and educators on sleep and sleep disorders for children and teens.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL(
            'http://www.sleepfoundation.org/article/sleep-topics/teens-and-sleep'
            )}
        accessible
        accessibilityLabel="Click here to visit The National Sleep Foundation (Teens) official page"
        accessibilityHint="Navigates to The National Sleep Foundation (Teens) homepage">
        National Sleep Foundation (Teens)
        </Text>
      {"\n"}The National Sleep Foundation (Teens) has multiple topics on sleep related specifically to teens.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.sleepforkids.org/')}
        accessible
        accessibilityLabel="Click here to visit National Sleep Foundation (Kids) official page"
        accessibilityHint="Navigates to National Sleep Foundation (Kids) homepage">
        National Sleep Foundation (Kids)
        </Text>
      {"\n"}The National Sleep Foundation (Kids) is a child friendly website about sleep.
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