import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions} from "react-native";
import { Video } from 'expo-av';
import { Linking } from "expo";
import NavigationService from '../components/NavigationService';

// Tested and works on iOS
// Tested and works on Android

class HowLongScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Learn More'
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text style={styles.title}>
                    How Long Do Traumatic Stress Reactions Last?
                </Text>
                <Video
                    source={require('../assets/videos/vidHowLong.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_STRETCH}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: undefined, width: Dimensions.get('window').width, flex: 1, maxHeight: 254 }}
                    style={{ height: 208, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 12, borderTopWidth: 0, borderBottomWidth: 12, marginBottom:-1}}
                    accessibilityLabel="Video on how long stress reactions last"
                    accessibilityHint="Video on how long stress reactions last"
                />
                <Text style={styles.subTitle}>
                    When traumatic stress reactions last for weeks or months, they can get in the way of getting back to normal and feeling like yourself again.
                </Text>
                <ScrollView>
                    <Text style={styles.paragraph}>
                    For many children and their parents early traumatic stress reactions get better over the first month. 
                    But about 1 in 6 still have traumatic stress reactions that bother them, even 6 months after an injury. 
                    </Text>
                    <Text style={styles.paragraph}>
                    Nearly everyone feels upset or anxious early on. 
                    Over the next few weeks and months, these reactions usually get weaker and then go away. 
                    Even children recovering from serious injuries start to develop ways to cope.
                    </Text>
                    <Text style={styles.paragraph}>
                    But for some people, these early reactions do not seem to get better as the months go by, or they may get worse. 
                    Even if the physical injury has healed, they may not have recovered from the trauma. 
                    The intensity and length of the traumatic stress reactions is not related to how bad the physical injury was.
                    </Text>
                    <Text style={styles.paragraphTitle}>
                    Why be concerned?
                    </Text>
                    <Text style={styles.paragraph}>
                    When traumatic stress reactions last for weeks or months, they can get in the way of getting back to normal and feeling like yourself again.
                    </Text>
                    <Text style={styles.paragraphTitle}>
                    For children and teens, this can affect school, home, and play.
                    </Text>
                    <Text style={styles.bullet}>- Schoolwork and learning might be disrupted because a child cannot concentrate or sleep well.</Text>
                    <Text style={styles.bullet}>- Family relationships and friendships might suffer.</Text>
                    <Text style={styles.bullet}>- Children might stop doing things that they enjoy, or stop trying new things.</Text>
                    <Text style={styles.paragraphTitle}>
                    What is posttraumatic stress disorder, or 'PTSD'?
                    </Text>
                    <Text style={styles.paragraph}>
                    Posttraumatic stress disorder (PTSD) is the name given to traumatic stress reactions that:
                    </Text>
                    <Text style={styles.bullet}>- Are so severe that they get in the way of normal life and</Text>
                    <Text style={styles.bullet}>- Last for more than one month.</Text>
                    <Text style={styles.paragraph}>
                    It is important to know if your child or someone else in your family develops posttraumatic stress disorder from the accident or injury. It is much more common than people realize.
                    </Text>
                    <Text style={styles.paragraph}>
                    Up to 1 in 10 people develop posttraumatic stress disorder at some point in their lives.
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize:16, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:4, marginBottom:3}}>
                    After an injury, posttraumatic stress disorder can:
                    </Text>
                    <Text style={styles.bullet}>- Get in the way of physical recovery</Text>
                    <Text style={styles.bullet}>- Contribute to new medical problems; or</Text>
                    <Text style={styles.bullet}>- Just make it harder to enjoy life.</Text>
                    <Text style={styles.link} onPress={()=> Linking.openURL('https://medlineplus.gov/ency/article/000925.htm')}
                        accessibilityLabel="Click here for more information on PTSD"
                        accessibilityHint="Navigates to a website on the casuses of PTSD">
                    Click here for more information on PTSD.
                    </Text>
                    <Text style={styles.paragraph}>
                    The good news is that very good treatments for PTSD are available. 
                    Unfortunately, less than half of people with traumatic stress symptoms talk to anyone about their problems or get any professional help, even when their symptoms go on for a long time.
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
    title: {
        backgroundColor: '#2089DC', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 22, 
        textAlign: 'center', 
        alignSelf: 'stretch'
    },
    subTitle: {
        backgroundColor: '#2089DC', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 14, 
        textAlign: 'center', 
        alignSelf: 'stretch',
        marginBottom: 3,
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize:20,
        alignSelf:'stretch',
        textAlign:'left',
        marginLeft:5,
        marginTop:4,
        marginBottom:3,
        color:'#2089DC'
    },
    bullet: {
        marginVertical:1, 
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
        fontSize: 14,
        marginTop: 5,
    },
    link: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 16,
        color:'#2089DC',
        textDecorationLine: 'underline',
        marginTop: 4,
        marginTop: 3,
    }
});