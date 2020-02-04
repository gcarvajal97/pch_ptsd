import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';
import translate from '../../components/translateService';

class Avoidance extends Component {

  render() {
    return (
        <View>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.avoidance.paragraphTitle1')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.avoidance.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.avoidance.paragraph1')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.avoidance.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.avoidance.paragraph2')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.avoidance.paragraphTitle2')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.avoidance.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.avoidance.paragraph3')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.avoidance.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.avoidance.paragraph4')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.avoidance.paragraphTitle3')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.avoidance.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.avoidance.paragraph5')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.avoidance.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.avoidance.paragraph6')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.avoidance.paragraphTitle4')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.avoidance.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.avoidance.paragraph7')}</Text> 
            <Text style={styles.paragraphBold}>{translate('selfCare.content.avoidance.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.avoidance.paragraph8')}</Text>                
        </View>
    );
  }
}

export default Avoidance;

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