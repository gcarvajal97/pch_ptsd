import i18n from 'i18n-js';
import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions} from "react-native";
import { Video } from 'expo-av';
import { Linking } from "expo";
import translate, { getVideo } from '../components/translateService';
import colors from '../colors';

const videos = {
    en: require("../assets/videos/vidHowLong.mp4"),
    es: require("../assets/videos/vidHowLongEs.mp4"),
};

// Tested and works on iOS
// Tested and works on Android  

class HowLongScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: translate('howLong.header')
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text style={styles.title}>
                    {translate('howLong.title')}
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
                        borderColor: colors.secondary.pms_3005, 
                        borderWidth: 14, 
                        borderTopWidth: 0, 
                        borderBottomWidth: 0, 
                        marginBottom:-1
                    }}
                    accessible
                    accessibilityLabel={translate(
                        'howLong.content.videoCard.accessibility'
                        )}
                    accessibilityHint={translate(
                        'howLong.content.videoCard.accessibility'
                        )}
                />
                <Text style={styles.subTitle}>
                    <Text style={{ fontWeight: 'bold' }}>{translate('howLong.content.videoCard.title')}</Text>
                    {translate('howLong.content.videoCard.subtitle')}
                </Text>
                <ScrollView>
                    <Text style={styles.paragraph}>{translate('howLong.content.mainParagraphOne')}</Text>
                    <Text style={styles.paragraph}>{translate('howLong.content.mainParagraphTwo')}</Text>
                    <Text style={styles.paragraph}>{translate('howLong.content.mainParagraphThree')}</Text>
                    <Text style={styles.paragraphTitle}>{translate('howLong.content.concernParagraph.mainTitle')}</Text>
                    <Text style={styles.paragraph}>{translate('howLong.content.concernParagraph.paragraphOne')}</Text>
                    <Text style={styles.paragraphTitle}>{translate('howLong.content.concernParagraph.bulletList.title')}</Text>
                    <Text style={styles.bullet}>{translate('howLong.content.concernParagraph.bulletList.bulletOne')}</Text>
                    <Text style={styles.bullet}>{translate('howLong.content.concernParagraph.bulletList.bulletTwo')}</Text>
                    <Text style={styles.bullet}>{translate('howLong.content.concernParagraph.bulletList.bulletThree')}</Text>
                    <Text style={styles.paragraphTitle}>
                    {translate('howLong.content.whatIsPTSDParagraph.title')}
                    </Text>
                    <Text style={styles.paragraph}>
                    {translate('howLong.content.whatIsPTSDParagraph.bulletListOne.title')}
                    </Text>
                    <Text style={styles.bullet}>{translate('howLong.content.whatIsPTSDParagraph.bulletListOne.bulletOne')}</Text>
                    <Text style={styles.bullet}>{translate('howLong.content.whatIsPTSDParagraph.bulletListOne.bulletTwo')}</Text>
                    <Text style={styles.paragraph}>
                    {translate('howLong.content.whatIsPTSDParagraph.paragraphOne')}
                    </Text>
                    <Text style={styles.paragraph}>
                    {translate('howLong.content.whatIsPTSDParagraph.paragraphTwo')}
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize:16, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:4, marginBottom:3}}>
                    {translate('howLong.content.whatIsPTSDParagraph.bulletListTwo.title')}
                    </Text>
                    <Text style={styles.bullet}>{translate('howLong.content.whatIsPTSDParagraph.bulletListTwo.bulletOne')}</Text>
                    <Text style={styles.bullet}>{translate('howLong.content.whatIsPTSDParagraph.bulletListTwo.bulletTwo')}</Text>
                    <Text style={styles.bullet}>{translate('howLong.content.whatIsPTSDParagraph.bulletListTwo.bulletThree')}</Text>
                    <Text 
                        testID='hyperlink'
                        style={styles.link} 
                        onPress={()=> Linking.openURL('https://medlineplus.gov/ency/article/000925.htm')}
                        accessible
                        accessibilityLabel={translate('howLong.content.whatIsPTSDParagraph.hyperLinkOne.accessibilityHint')}
                        accessibilityHint={translate('howLong.content.whatIsPTSDParagraph.hyperLinkOne.accessibilityHint')}>
                        {translate('howLong.content.whatIsPTSDParagraph.hyperLinkOne.text')}
                    </Text>
                    <Text style={styles.paragraph}>
                    {translate('howLong.content.whatIsPTSDParagraph.paragraphThree')}
                    </Text>
                </ScrollView>
        </View>
        );
    }
}
export default HowLongScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: colors.primary.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    title: {
        backgroundColor: colors.secondary.pms_3005, 
        color: colors.primary.white, 
        fontWeight: 'bold', 
        fontSize: 22, 
        textAlign: 'center', 
        alignSelf: 'stretch'
    },
    subTitle: {
        backgroundColor: colors.secondary.pms_3005, 
        color: colors.primary.white, 
        alignSelf: 'stretch', 
        paddingLeft: 15, 
        paddingRight: 15, 
        fontSize: 15, 
        borderBottomWidth: 2, 
        borderBottomColor: colors.secondary.pms_3005,
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 5,
        marginTop: 4,
        marginBottom: 3,
        color: colors.secondary.pms_3005
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
        color: colors.secondary.pms_3005,
        textDecorationLine: 'underline',
        marginTop: 4,
        marginTop: 3,
    }
});