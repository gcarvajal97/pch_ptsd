import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';
import translate from '../../components/translateService';
import colors from '../../colors';

class RelivingWhat extends Component {

  render() {
    return (
        <View>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.reExperiencing.paragraphTitle1')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.reExperiencing.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.reExperiencing.paragraph1')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.reExperiencing.problem')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.reExperiencing.paragraph2')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.reExperiencing.paragraphTitle2')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.reExperiencing.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.reExperiencing.paragraph3')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.reExperiencing.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.reExperiencing.paragraph4')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.reExperiencing.paragraphTitle3')}</Text> 
            <Text style={styles.paragraphBold}>{translate('selfCare.content.reExperiencing.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.reExperiencing.paragraph5')}</Text> 
            <Text style={styles.paragraphBold}>{translate('selfCare.content.reExperiencing.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.reExperiencing.paragraph6')}</Text>             
        </View>
    );
  }
}

export default RelivingWhat;

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
      fontFamily: "avenir-medium",
      fontSize: 14,
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