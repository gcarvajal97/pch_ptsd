import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Linking } from "expo";
import translate from '../../components/translateService';
import colors from '../../colors';

export default class InjuryPreventionTipsScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch1_p1')}</Text>
        <Text style={styles.paragraph}>{translate('injuryPainCare.Ch1_p2')}{"\n"}{"\ "}
        <Text 
          testID='hyperlink'
          style={styles.link}
          onPress={()=> Linking.openURL('https://www.chop.edu/centers-programs/injury-prevention-program')}
          accessible
          accessibilityLabel={translate('injuryPainCare.Ch1_accessibilityLabel')}
          accessibilityHint={translate('injuryPainCare.Ch1_accessibilityHint')}>
          {translate('injuryPainCare.Ch1_click_here')}</Text>
        {"\ "}{translate('injuryPainCare.Ch1_p3')}</Text>
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
    fontFamily: 'avenir-medium',
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
    fontFamily: 'avenir-medium',
    textDecorationLine: 'underline',
  }
});