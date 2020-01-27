import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Video } from 'expo-av';
import translate from '../components/translateService';
import i18n from 'i18n-js';

class YoureNotAlone extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: translate('youAreNotAloneScreen.header')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ backgroundColor: '#2089DC', color: 'white', fontWeight: 'bold', fontSize: 22, textAlign: 'center', alignSelf: 'stretch' }}>
                    {translate('youAreNotAloneScreen.title')}
                </Text>
                <Video
                    source={i18n.locale == 'en' ? require('../assets/videos/vidAlone.mp4') : require('../assets/videos/vidAloneEs.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: 204, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 14, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                    accessible
                    accessibilityLabel={translate('youAreNotAloneScreen.content.videoCard.accessibility')}
                    accessibilityHint={translate('youAreNotAloneScreen.content.videoCard.accessibility')}
                />
                <Text style={{ backgroundColor: '#2089DC', color: 'white', alignSelf: 'stretch', paddingLeft: 15, fontSize: 15, borderBottomWidth:2, borderBottomColor:'#2089DC'}}>
                    <Text style={{ fontWeight: 'bold' }}>{translate('youAreNotAloneScreen.content.videoCard.boldText')}</Text> 
                    {translate('youAreNotAloneScreen.content.videoCard.subtitle')}
                </Text>
                <ScrollView>
                <Text style={{fontWeight: 'bold', fontSize:20, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:4, marginBottom:3, color:'#2089DC'}}>
                    {translate('youAreNotAloneScreen.content.statsBullets.intro')}
                    </Text>
                <Text style={styles.bullet}>{translate('youAreNotAloneScreen.content.statsBullets.bulletOne')}</Text>
                <Text style={styles.bullet}>{translate('youAreNotAloneScreen.content.statsBullets.bulletTwo')}</Text>
                <Text style={styles.bullet}>{translate('youAreNotAloneScreen.content.statsBullets.bulletThree')}</Text>
                <Text style={styles.paragraph}>{translate('youAreNotAloneScreen.content.paragraphOne')}</Text>
                <Text style={styles.paragraph}>{translate('youAreNotAloneScreen.content.paragraphTwo')}</Text>        
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
        backgroundColor: 'white',
        shadowColor: "#000",
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
        fontSize:14,
        paddingTop: 4,
    },
    paragraph: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 14,
        marginTop: 5,
    },
});