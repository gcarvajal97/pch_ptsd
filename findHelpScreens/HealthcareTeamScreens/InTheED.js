import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import translate from '../../components/translateService';
import colors from '../../colors';

export default class InTheED extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_p1')}</Text>
        
        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH1_TITLE_1')}</Text>
        
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t1_b1')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t1_b2')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t1_b3')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t1_b4')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t1_b5')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t1_b6')}</Text>
          
        <Text style={styles.paragraphTitle}>{translate('healthcareTeam.CH1_TITLE_2')}</Text>
        
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t2_n1')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t2_n2')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t2_n3')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t2_n4')}</Text>
        <Text style={styles.paragraph}>{translate('healthcareTeam.Ch1_t2_n5')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraphTitle: {
    fontFamily: 'avenir-heavy',
    fontSize: 20,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 3,
    color: colors.accent
  },
  paragraph: {
    textAlign:'left',
    fontSize: 14,
    fontFamily: 'avenir-medium',
    marginVertical:2,
  }
});