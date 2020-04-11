import i18n from 'i18n-js';
import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Video } from 'expo-av';
import translate, { getVideo } from '../components/translateService';
import colors from '../colors';

const videos = {
    en: require("../assets/videos/vidAlone.mp4"),
    es: require("../assets/videos/vidAloneEs.mp4"),
};

class YoureNotAlone extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: translate('youAreNotAlone.header')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {translate('youAreNotAlone.title')}
                </Text>
                <Video
                    source={getVideo(videos)}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ 
                        height: 204, 
                        width: '100%', 
                        maxHeight: 254, 
                        borderColor: colors.accent, 
                        borderWidth: 14, 
                        borderTopWidth: 0, 
                        borderBottomWidth: 0, 
                        marginBottom:-1
                    }}
                    accessible
                    accessibilityLabel={translate(
                        'youAreNotAlone.content.videoCard.accessibility'
                        )}
                    accessibilityHint={translate(
                        'youAreNotAlone.content.videoCard.accessibility'
                        )}
                />
                <Text style={styles.subTitle}>
                    <Text style={{ fontFamily: 'avenir-heavy' }}>{translate('youAreNotAlone.content.videoCard.boldText')}</Text> 
                    {translate('youAreNotAlone.content.videoCard.subtitle')}
                </Text>
                <ScrollView>
                <Text style={{
                    fontFamily: 'avenir-heavy', 
                    fontSize:20, 
                    alignSelf:'stretch', 
                    textAlign:'left',
                    marginLeft:5, 
                    marginTop:4, 
                    marginBottom:3, 
                    color: colors.accent
                }}>
                    {translate('youAreNotAlone.content.statsBullets.intro')}
                    </Text>
                <Text style={styles.bullet}>{translate('youAreNotAlone.content.statsBullets.bulletOne')}</Text>
                <Text style={styles.bullet}>{translate('youAreNotAlone.content.statsBullets.bulletTwo')}</Text>
                <Text style={styles.bullet}>{translate('youAreNotAlone.content.statsBullets.bulletThree')}</Text>
                <Text style={styles.paragraph}>{translate('youAreNotAlone.content.paragraphOne')}</Text>
                <Text style={styles.paragraph}>{translate('youAreNotAlone.content.paragraphTwo')}</Text>        
                </ScrollView>
            </View>
        );
    }
}
export default YoureNotAlone;

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
      fontFamily: 'avenir-heavy', 
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
      fontFamily: 'avenir-heavy',
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
      fontFamily: 'avenir-heavy',
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