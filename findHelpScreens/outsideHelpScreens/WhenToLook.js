import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { translate } from '../../components/translateService';


class WhenToLook extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragraphTitle}>{translate('whenToLook.paragraphTitle1')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph1')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph2')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph3')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph4')}</Text>
        <Text style={styles.paragraphTitle}>{translate('whenToLook.paragraphTitle2')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph5')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph6')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph7')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph8')}</Text>
        <Text style={styles.paragraph}>{translate('whenToLook.paragraph9')}</Text>
    </View>
    );
  }
}

export default WhenToLook;

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