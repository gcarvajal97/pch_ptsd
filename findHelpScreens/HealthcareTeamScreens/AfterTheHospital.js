import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import translate from '../../components/translateService';

export default class AfterTheHospital extends Component {
  render() {
    return (
      <View>
        
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_p1')}</Text>

        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH3_TITLE_1')}</Text>

        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t1_n1')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t1_n2')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t1_n3')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t1_n4')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t1_n5')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t1_n6')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t1_n7')}</Text>

        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH3_TITLE_2')}</Text>

        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t2_n1')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t2_n2')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t2_n3')}</Text>

        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH3_TITLE_3')}</Text>

        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch3_t3_p1')}</Text>
        
        <Text style={styles.paragraphBold}>{translate('healthcareTeam.Ch3_t3_b1')}</Text>
        <Text style={styles.paragraphBold}>{translate('healthcareTeam.Ch3_t3_b2')}</Text>
        <Text style={styles.paragraphBold}>{translate('healthcareTeam.Ch3_t3_b3')}</Text>

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
    textAlign: 'left',
    fontSize: 14,
    marginVertical: 2,
  },
  paragraphBold: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 2,
    marginLeft: 10
  }
});