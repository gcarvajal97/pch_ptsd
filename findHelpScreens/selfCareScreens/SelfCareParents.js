import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';
import translate from '../../components/translateService';
import colors from '../../colors';

class SelfCareParents extends Component {

  render() {
    return (
        <View>
                <Text style={styles.paragraphTitle}>{translate('selfCare.content.selfCareParents.paragraphTitle1')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph1')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph2')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph3')}</Text>
                <Text style={styles.paragraphTitle}>{translate('selfCare.content.selfCareParents.paragraphTitle2')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph4')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph5')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph6')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph7')}</Text>
                <Text style={styles.paragraphTitle}>{translate('selfCare.content.selfCareParents.paragraphTitle3')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph8')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph9')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph10')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph11')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph12')}</Text>
                <Text style={styles.paragraphTitle}>{translate('selfCare.content.selfCareParents.paragraphTitle4')}</Text>
                    <Text style={styles.paragraph}>{translate('selfCare.content.selfCareParents.paragraph13')}</Text>   
        </View>             
    );
  }
}

export default SelfCareParents;

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