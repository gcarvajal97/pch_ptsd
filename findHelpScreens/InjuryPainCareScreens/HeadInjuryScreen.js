import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Linking } from "expo";
import translate from '../../components/translateService';
import colors from '../../colors';

export default class HeadInjuryScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch5_p1')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch5_p2')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch5_p3')}</Text>

        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch5_p4_part1')}{"\ "}
        <Text 
          testID='hyperlink'
          style={styles.link} 
          onPress={()=> Linking.openURL('https://www.chop.edu/centers-programs/concussion-care-minds-matter')}
          accessible
          accessibilityLabel={translate('injuryPainCare.Ch5_accessibilityLabel')}
          accessibilityHint={translate('injuryPainCare.Ch5_accessibilityHint')}>
          {translate('injuryPainCare.Ch5_click_here')}
        </Text>{translate('injuryPainCare.Ch5_p4_part2')}</Text>
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
    textAlign: 'left',
    fontSize: 14,
    marginVertical: 2,
  },
  paragraphBold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'avenir-heavy',
    marginVertical: 2,
    marginLeft: 10
  },
  link: {
    fontSize: 14,
    color: colors.accent,
    textDecorationLine: 'underline',
  }
});