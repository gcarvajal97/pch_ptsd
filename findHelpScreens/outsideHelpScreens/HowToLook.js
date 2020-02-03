import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";
import { translate } from '../../components/translateService';

export default class HowToLook extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{translate('howToLook.paragraph1')}</Text>
        <Text style={styles.paragraph}>{translate('howToLook.paragraph2')}</Text>
        <Text style={styles.paragraph}>{translate('howToLook.paragraph3')}</Text>
        <Text style={styles.paragraph}>
        {"\ "}
        <Text style={styles.link} onPress={()=> Linking.openURL('http://www.nctsnet.org/nccts/nav.do?pid=ctr_aud_prnt_gethelp')}
          accessible
          accessibilityLabel={translate('howToLook.accessibilityLabel')}
          accessibilityHint={translate('howToLook.accessibilityHint')}>
          {translate('howToLook.linkName')}
          </Text>
          {"\ "}{translate('howToLook.paragraph4')}
        </Text>
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
  },
  link: {
    fontSize: 14,
    color:'#2089DC',
    textDecorationLine: 'underline',
  }
});