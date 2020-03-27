import i18n from 'i18n-js';
import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Video } from 'expo-av';
import translate, { getVideo } from '../components/translateService';
import colors from '../colors';

const videos = {
    en: require("../assets/videos/vidReactToInjury.mp4"),
    es: require("../assets/videos/vidReactToInjuryEs.mp4"),
  };

class ReactionsToInjury extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: translate("reactionsToInjury.header")
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {translate('reactionsToInjury.title')}
                </Text>
                <Video
                    // Import video corresponding to this screen from assets
                    source={getVideo(videos)}
                    volume={1.0}
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
                        marginBottom: -1
                    }}
                    accessible
                    accessibilityLabel={translate('reactionsToInjury.content.videoCard.accessibility')}
                    accessibilityHint={translate('reactionsToInjury.content.videoCard.accessibility')}
                />
                <Text style={styles.subTitle}>
                    <Text style={{ fontWeight: 'bold' }}>{translate('reactionsToInjury.content.videoCard.title')}</Text> 
                    {translate('reactionsToInjury.content.videoCard.subtitle')}
                </Text>
                <ScrollView>
                    <Text style={styles.paragraph}>{translate('reactionsToInjury.content.paragraphOne')}</Text>
                    <Text style={styles.paragraph}>{translate('reactionsToInjury.content.paragraphTwo')}</Text>
                    <Text style={{fontWeight: 'bold', fontSize:20, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:2, marginBottom:8, color:'#2089DC'}}>
                    {translate('reactionsToInjury.content.bulletListOne.title')}
                    </Text>
                    <Text style={styles.bullet}>{translate('reactionsToInjury.content.bulletListOne.bulletOne')}</Text>
                    <Text style={styles.bullet}>{translate('reactionsToInjury.content.bulletListOne.bulletTwo')}</Text>
                    <Text style={styles.bullet}>{translate('reactionsToInjury.content.bulletListOne.bulletThree')}</Text>
                    <Text style={styles.bullet}>{translate('reactionsToInjury.content.bulletListOne.bulletFour')}</Text>
                    <Text style={styles.bulletLast}>{translate('reactionsToInjury.content.bulletListOne.bulletFive')}</Text>
                    <Text style={{fontWeight: 'bold', fontSize:20, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:2, marginBottom:8, color:'#2089DC'}}>
                    {translate('reactionsToInjury.content.bulletListTwo.title')}
                    </Text>
                    <Text style={styles.bullet}>{translate('reactionsToInjury.content.bulletListTwo.bulletOne')}</Text>
                    <Text style={styles.bulletLast}>{translate('reactionsToInjury.content.bulletListTwo.bulletTwo')}</Text>
                    <Text style={styles.paragraph}>{translate('reactionsToInjury.content.paragraphThree')}
                    <Text style={{fontWeight:'bold'}}> {translate('reactionsToInjury.content.paragraphThreeBold')}</Text>
                    </Text>        
                </ScrollView>
            </View>
        );
    }
}
export default ReactionsToInjury;

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
    bullet: {
        marginVertical:1, 
        marginHorizontal:18, 
        textAlign:'left', 
        alignSelf:'stretch', 
        fontWeight:'bold',
        fontSize:14
    },
    bulletLast: {
        marginTop:1,
        marginBottom:6, 
        marginHorizontal:18, 
        textAlign:'left', 
        alignSelf:'stretch', 
        fontWeight:'bold',
        fontSize:14
    },
    paragraph: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 14
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
    }
});