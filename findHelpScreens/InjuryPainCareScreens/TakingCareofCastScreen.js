import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import translate from '../../components/translateService';
import colors from '../../colors';

export default class TakingCareofCastScreen extends Component {
  render() {
    return (
      <View>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_p1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_p2')}</Text>
          <Text style={styles.paragraph}>{"\t"}{translate('injuryPainCare.Ch3_b1')}</Text>
          <Text style={styles.paragraph}>{"\t"}{translate('injuryPainCare.Ch3_b2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_p3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_p4')}</Text>

          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH3_TITLE_1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b4')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b5')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b6')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b7')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b8')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b9')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b10')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b11')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b12')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b13')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t1_b14')}</Text>
                      
          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH3_TITLE_2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t2_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t2_b2')}</Text>
                  
          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH3_TITLE_3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t3_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t3_b2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t3_b3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t3_b4')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t3_b5')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t3_b6')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t3_b7')}</Text>
                  
          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH3_TITLE_4')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_p1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b4')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b5')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b6')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b7')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b8')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b9')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch3_t4_b10')}</Text>
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
    color: colors.accent
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