import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import translate from '../../components/translateService';

export default class InTheHospital extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_p1')}</Text>

        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH2_TITLE_1')}</Text>

        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n1')}</Text>            
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n2')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n3')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n4')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n5')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n6')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n7')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n8')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n9')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t1_n10')}</Text>
            
        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH2_TITLE_2')}</Text>

        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n1')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n2')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n3')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n4')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n5')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n6')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n7')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n8')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t2_n9')}</Text>

        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH2_TITLE_3')}</Text>

        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t3_n1')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t3_n2')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t3_n3')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t3_n4')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t3_n5')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t3_n6')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t3_n7')}</Text>

        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH2_TITLE_4')}</Text>

        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t4_p1')}</Text>
        
        <Text style={styles.paragraphBold}>{translate('healthcareTeam.Ch2_t4_b1')}</Text>
        <Text style={styles.paragraphBold}>{translate('healthcareTeam.Ch2_t4_b2')}</Text>
        <Text style={styles.paragraphBold}>{translate('healthcareTeam.Ch2_t4_b3')}</Text>
        
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch2_t4_p2')}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    textAlign:'left',
    fontSize: 14,
    marginVertical:2,
  },
  paragraphBold: {
    textAlign:'left',
    fontSize: 14,
    fontWeight:'bold',
    marginVertical:2,
    marginLeft:10
  }
});