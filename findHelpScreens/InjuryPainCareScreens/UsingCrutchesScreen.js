import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import translate from '../../components/translateService';
import colors from '../../colors';

export default class UsingCrutchesScreen extends Component {
  render() {
    return (
      <View>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_p1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_p2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_p3')}</Text>

          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH4_TITLE_1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t1_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t1_b2')}</Text>

          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH4_TITLE_2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t2_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t2_b2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t2_b3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t2_b4')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t2_b5')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t2_b6')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t2_b7')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t2_b8')}</Text>

          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH4_TITLE_3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t3_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t3_b2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t3_b3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t3_b4')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t3_b5')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t3_b6')}</Text>
                  
          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH4_TITLE_4')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t4_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t4_b2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t4_b3')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t4_b4')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t4_b5')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t4_b6')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t4_b7')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t4_b8')}</Text>
                  
          <Text style={styles.paragraphTitle}>{translate('injuryPainCare.CH4_TITLE_5')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t5_b1')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t5_b2')}</Text>
          <Text style={styles.paragraph}>{translate('injuryPainCare.Ch4_t5_b3')}</Text>
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