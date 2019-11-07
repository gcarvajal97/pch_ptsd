import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Video } from 'expo-av';

class SelfCare extends Component {
  
  static navigationOptions = {
    headerTitle: 'Find Help'
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={{ backgroundColor: '#2089DC', color: 'white', fontWeight: 'bold', fontSize: 22, textAlign: 'center', alignSelf: 'stretch' }}>
              Self Care
          </Text>
          <Image
              source={require('../assets/SelfCare.jpg')}
              style={{ height: 204, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 14, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
              accessibilityLabel="Photo of worried mother on phone."
              accessibilityHint="Photo of worried mother on phone."
          />
          <Text style={{ backgroundColor: '#2089DC', color: 'white', alignSelf: 'stretch', paddingLeft: 15, fontSize: 15, borderBottomWidth:2, borderBottomColor:'#2089DC'}}>
              <Text style={{ fontWeight: 'bold' }}>
                  Reactions you may notice in yourself. 
              </Text> 
              {"\n"}It is very important to take good care of yourself.
          </Text>
      </View>
    );
  }
}

export default SelfCare;

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
    }
  });