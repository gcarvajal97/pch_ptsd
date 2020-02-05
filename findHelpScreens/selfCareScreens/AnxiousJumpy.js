import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';
import translate from '../../components/translateService';

class AnxiousJumpy extends Component {

  render() {
    return (
        <View>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.hyperArousal.paragraphTitle1')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph1')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph2')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.hyperArousal.paragraphTitle2')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph3')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph4')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.hyperArousal.paragraphTitle3')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph5')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph6')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.hyperArousal.paragraphTitle4')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph7')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph8')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.hyperArousal.paragraphTitle5')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph9')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph10')}</Text>
            <Text style={styles.paragraphTitle}>{translate('selfCare.content.hyperArousal.paragraphTitle6')}</Text>
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.why')}</Text>
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph11')}</Text> 
            <Text style={styles.paragraphBold}>{translate('selfCare.content.hyperArousal.problem')}</Text>  
            <Text style={styles.paragraph}>{translate('selfCare.content.hyperArousal.paragraph12')}</Text>                
        </View>
    );
  }
}

export default AnxiousJumpy;

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