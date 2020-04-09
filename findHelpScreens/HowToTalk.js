import i18n from 'i18n-js';
import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Video } from 'expo-av';
import translate, { getVideo } from "../components/translateService";
import colors from '../colors';

const videos = {
    en: require("../assets/videos/vidHowToTalk.mp4"),
    es: require("../assets/videos/vidHowToTalkEs.mp4"),
};

class HowToTalk extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: translate('howToTalk.header')
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text style={styles.title}>
                    {translate('howToTalk.video_title')}
                </Text>
                <Video
                    source={getVideo(videos)}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_STRETCH}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: 204, width: '100%', maxHeight: 254, borderColor: colors.accent, borderWidth: 14, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                    accessible
                    accessibilityLabel={translate('howToTalk.accessibilityLabel')}
                    accessibilityHint={translate('howToTalk.accessibilityHint')}
                />
                <Text style={styles.subTitle}>
                <Text style={{ fontFamily: "avenir-heavy" }}>{translate('howToTalk.video_subtitle_1')}</Text>{translate('howToTalk.video_subtitle_2')}</Text>

                <ScrollView>

                    <Text style={styles.paragraph}>{translate('howToTalk.subtitle')}</Text>

                    <Text style={styles.paragraphTitle}>{translate('howToTalk.title_1')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_11')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_12')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_12_a')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_12_b')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_13')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_14')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_14_a')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_14_b')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_14_c')}</Text>

                    <Text style={styles.paragraphTitle}>{translate('howToTalk.title_2')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_21')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_21')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_22')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_22')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_23')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_23')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_24')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_24_a')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_24_b')}</Text>

                    <Text style={styles.paragraphTitle}>{translate('howToTalk.title_3')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_31')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_32')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_33')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_34')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_35')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_35_a')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_35_b')}</Text>

                    <Text style={styles.paragraphTitle}>{translate('howToTalk.title_4')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_41')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_41')}</Text>
                    <Text style={styles.bullet}>{translate('howToTalk.tip_42')}</Text>
                    <Text style={styles.subBullet}>{translate('howToTalk.subtip_42')}</Text>

                    <Text style={{ marginBottom:1 }}></Text>

                </ScrollView>
            </View>
        );
    }
}
export default HowToTalk;

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
        fontFamily: "avenir-heavy",
        fontSize: 22,
        textAlign: 'center',
        alignSelf: 'stretch'
    },
    subTitle: {
        backgroundColor: colors.accent,
        color: colors.primary.white,
        alignSelf: 'stretch',
        paddingLeft: 15,
        paddingRight:15,
        fontSize: 15,
        fontFamily: "avenir-medium",
        borderBottomWidth:2,
        borderBottomColor: colors.accent,
    },
    paragraphTitle: {
        fontFamily: "avenir-heavy",
        fontSize:20,
        alignSelf:'stretch',
        textAlign:'left',
        marginLeft:5,
        marginTop:4,
        marginBottom:3,
        color: colors.accent
    },
    bullet: {
        marginVertical:1,
        marginHorizontal:18,
        textAlign:'left',
        alignSelf:'stretch',
        fontFamily: "avenir-heavy",
        fontSize:14
    },
    subBullet: {
      marginVertical:1,
      marginHorizontal:30,
      textAlign:'left',
      alignSelf:'stretch',
      fontFamily: "avenir-medium",
      fontSize:14,
    },
    paragraph: {
        alignSelf:"center",
        paddingVertical:1,
        paddingHorizontal:5,
        fontSize: 14,
        marginTop: 5,
        fontFamily: "avenir-medium"
    }
});