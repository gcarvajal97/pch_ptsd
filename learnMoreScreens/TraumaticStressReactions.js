import i18n from 'i18n-js';
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, AccessibilityInfo} from 'react-native';
import { Video } from 'expo-av';
import translate, { getVideo } from '../components/translateService';
import color from '../colors';

const videos = {
  en: require("../assets/videos/vidStressReactions.mp4"),
  es: require("../assets/videos/vidStressReactionsEs.mp4"),
};

class TraumaticStressReactions extends Component {
  
  static navigationOptions = {
    headerTitle: translate('traumaticStressReactions.header')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {translate('traumaticStressReactions.title')}
        </Text>
        <Video
            source={getVideo(videos)}
            rate={1.0}
            volume={1.0}
            resizeMode={Video.RESIZE_MODE_STRETCH}
            resizeMode={Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            style={{ 
              height: 204, 
              width: '100%', 
              maxHeight: 254, 
              borderColor: color.accent, 
              borderWidth: 14, 
              borderTopWidth: 0, 
              borderBottomWidth: 0, 
              marginBottom:-1
            }}
            accessible
            accessibilityLabel={translate(
              'traumaticStressReactions.content.videoCard.accessibility'
              )}
            accessibilityHint={translate(
              'traumaticStressReactions.content.videoCard.accessibility'
              )}
        />
        <Text style={styles.subTitle}>
          <Text style={{ fontWeight: 'bold' }}>{translate('traumaticStressReactions.content.videoCard.title')}</Text>
          {translate('traumaticStressReactions.content.videoCard.subtitle')}
        </Text>
        <ScrollView>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.bulletListOne.title')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.bulletListOne.bulletOne')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.bulletListOne.bulletTwo')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.bulletListOne.bulletThree')}</Text>
          <Text style={styles.paragraph}>
          <Text style={{ fontWeight: 'bold' }}>{translate('traumaticStressReactions.content.reExperiencingParagraph.boldNote')}</Text>
          {translate('traumaticStressReactions.content.reExperiencingParagraph.note')}</Text>
          <Text style={styles.paragraphTitle}>{translate('traumaticStressReactions.content.reExperiencingParagraph.title')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.reExperiencingParagraph.paragraphOne')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.reExperiencingParagraph.paragraphTwo')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.reExperiencingParagraph.paragraphThree')}</Text>
          <Text style={styles.paragraphTitle}>{translate('traumaticStressReactions.content.avoidanceParagraph.title')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.avoidanceParagraph.paragraphOne')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.avoidanceParagraph.paragraphTwo')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.avoidanceParagraph.paragraphThree')}</Text>
          <Text style={styles.paragraphTitle}>{translate('traumaticStressReactions.content.hyperArousalParagraph.title')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.hyperArousalParagraph.paragraphOne')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListOne.bulletOne')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListOne.bulletTwo')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.hyperArousalParagraph.paragraphTwo')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListTwo.title')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListTwo.bulletOne')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListTwo.bulletTwo')}</Text>
          <Text style={styles.paragraph}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListThree.title')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListThree.bulletOne')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListThree.bulletTwo')}</Text>
          <Text style={styles.bullet}>{translate('traumaticStressReactions.content.hyperArousalParagraph.bulletListThree.bulletThree')}</Text>
        </ScrollView>
    </View>
    );
  }
}

export default TraumaticStressReactions;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      margin: 10,
      backgroundColor: colors.primary.white,
      shadowColor: colors.primary.black,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
  },
  title: {
      backgroundColor: colors.accent, 
      color: colors.primary.white, 
      fontWeight: 'bold', 
      fontSize: 22, 
      textAlign: 'center', 
      alignSelf: 'stretch'
  },
  subTitle: {
      backgroundColor: colors.accent, 
      color: colors.primary.white, 
      alignSelf: 'stretch', 
      paddingLeft: 15, 
      paddingRight: 15, 
      fontSize: 15, 
      borderBottomWidth: 2, 
      borderBottomColor: colors.accent,
  },
  paragraphTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'stretch',
      textAlign: 'left',
      marginLeft: 5,
      marginTop: 4,
      marginBottom: 3,
      color: colors.accent
  },
  bullet: {
      marginVertical: 1, 
      marginHorizontal: 18, 
      textAlign: 'left', 
      alignSelf: 'stretch', 
      fontWeight: 'bold',
      fontSize: 14
  },
  paragraph: {
      alignSelf: "center", 
      paddingVertical: 1, 
      paddingHorizontal: 5,
      fontSize: 14,
      marginTop: 5,
  },
  link: {
      alignSelf:"center", 
      paddingVertical: 1, 
      paddingHorizontal: 5,
      fontSize: 16,
      color: colors.accent,
      textDecorationLine: 'underline',
      marginTop: 4,
      marginTop: 3,
  }
});