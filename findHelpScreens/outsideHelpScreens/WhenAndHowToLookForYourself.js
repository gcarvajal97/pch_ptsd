import React, { Component } from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { translate } from '../../components/translateService';

export default class WhenAndHowToLookForYourself extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph1')}</Text>
        <Text style={styles.paragraphTitle}>{translate('whenToLookYourself.paragraphTitle1')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph2')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph3')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph4')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph5')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph6')}</Text>
        <Text style={styles.paragraphTitle}>{translate('whenToLookYourself.paragraphTitle1')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph7')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph8')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph9')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLookYourself.paragraph10')}</Text>
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