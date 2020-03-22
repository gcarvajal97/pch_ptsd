import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import QuickTipsCard from './QuickTipsCard';
import translate from '../../components/translateService';
import colors from '../../colors';

class QuickTips extends Component {
  
  static navigationOptions = {
    headerTitle: translate('quickTips.header')
  }

  render() {
    return (
      <View style={styles.container}> 
        <ScrollView>
          <QuickTipsCard/>
            <Text style={styles.paragraphTitleTop}>
              {translate('quickTips.tip_one')}
            </Text>
            <Text style={styles.paragraph}>
              {translate('quickTips.desc_one')}
            </Text>
            <Text style={styles.paragraphTitle}>
              {translate('quickTips.tip_two')}
            </Text>
            <Text style={styles.paragraph}>
              {translate('quickTips.desc_two')}
            </Text>
            <Text style={styles.paragraphTitle}>
              {translate('quickTips.tip_three')}
            </Text>
            <Text style={styles.paragraph}>
              {translate('quickTips.desc_three')}
            </Text>
            <Text style={styles.paragraphTitle}>
              {translate('quickTips.tip_four')}
            </Text>
            <Text style={styles.paragraph}>
              {translate('quickTips.desc_four')}
            </Text>
            <Text style={styles.paragraphTitle}>
              {translate('quickTips.tip_five')}
            </Text>
            <Text style={styles.paragraph}>
              {translate('quickTips.desc_five')}
            </Text>
            <Text style={styles.paragraphTitle}>
              {translate('quickTips.tip_six')}
            </Text>
            <Text style={styles.paragraph}>
              {translate('quickTips.desc_six')}
            </Text>
        </ScrollView>
      </View>
    );
  }
}

export default QuickTips;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      margin: 10,
      backgroundColor: colors.primary.white,
      shadowColor: colors.primary.black,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
  },
  title: {
      backgroundColor: colors.secondary.pms_3005, 
      color: colors.primary.white, 
      fontWeight: 'bold', 
      fontSize: 22, 
      textAlign: 'center', 
      alignSelf: 'stretch'
  },
  paragraphTitle: {
      fontWeight: 'bold',
      fontSize:16,
      alignSelf:'stretch',
      textAlign:'left',
      marginLeft:5,
      marginTop:6,
      marginBottom:3,
      color: colors.secondary.pms_3005
  },
  paragraphTitleTop: {
    fontWeight: 'bold',
    fontSize:16,
    alignSelf:'stretch',
    textAlign:'left',
    marginLeft:5,
    marginTop:10,
    marginBottom:3,
    color: colors.secondary.pms_3005
},
  paragraph: {
      alignSelf:"center", 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 14,
      marginTop: 5,
  }
});