import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import translate from '../../components/translateService';
import colors from '../../colors';

export default class AdbominalTraumaScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_p1')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_p2')}</Text>

        <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH2_TITLE_1')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t1_b1')}</Text>      
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t1_b2')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t1_b3')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t1_b4')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t1_b5')}</Text>
                
        <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH2_TITLE_2')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t2_b1')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t2_b2')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t2_b3')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t2_b4')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t2_b5')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t2_b6')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t2_b7')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch2_t2_b8')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraphTitle: {
    fontFamily: "avenir-heavy",
    fontSize: 20,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 3,
    color: colors.accent
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: "avenir-medium",
    marginVertical: 2,
  },
  paragraphBold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: "avenir-heavy",
    marginVertical: 2,
    marginLeft: 10
  }
});