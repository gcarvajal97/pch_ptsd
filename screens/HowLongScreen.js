import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions} from "react-native";
import { Video } from 'expo-av';
import { Linking } from "expo";

class HowLongScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'How Long Do Reactions Last'
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
                />
                <ScrollView>
                    <Text style={styles.paragraph}>
                    {"\n"}
                    {'\t'} For many children and their parents early traumatic stress reactions get better over the first month. 
                    But about 1 in 6 still have traumatic stress reactions that bother them, even 6 months after an injury. 
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraph}>
                    {'\t'} Nearly everyone feels upset or anxious early on. 
                    Over the next few weeks and months, these reactions usually get weaker and then go away. 
                    Even children recovering from serious injuries start to develop ways to cope.
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraph}>
                    {'\t'} But for some people, these early reactions do not seem to get better as the months go by, or they may get worse. 
                    Even if the physical injury has healed, they may not have recovered from the trauma. 
                    The intensity and length of the traumatic stress reactions is not related to how bad the physical injury was.
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraphTitle}>
                    Why be concerned?
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraph}>
                    When traumatic stress reactions last for weeks or months, they can get in the way of getting back to normal and feeling like yourself again.
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraphTitle}>
                    For children and teens, this can affect school, home, and play.
                    {"\n"}
                    </Text>
                    <Text style={styles.bullet}>- Schoolwork and learning might be disrupted because a child cannot concentrate or sleep well.</Text>
                    <Text style={styles.bullet}>- Family relationships and friendships might suffer.</Text>
                    <Text style={styles.bullet}>- Children might stop doing things that they enjoy, or stop trying new things.</Text>
                    <Text style={styles.paragraphTitle}>
                    {"\n"}
                    What is posttraumatic stress disorder, or 'PTSD'?
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraph}>
                    Posttraumatic stress disorder (PTSD) is the name given to traumatic stress reactions that:
                    {"\n"}
                    </Text>
                    <Text style={styles.bullet}>- Are so severe that they get in the way of normal life and</Text>
                    <Text style={styles.bullet}>- Last for more than one month.</Text>
                    <Text style={styles.paragraph}>
                    {"\n"}
                    It is important to know if your child or someone else in your family develops posttraumatic stress disorder from the accident or injury. It is much more common than people realize.
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraph}>
                    Up to 1 in 10 people develop posttraumatic stress disorder at some point in their lives.
                    {"\n"}
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize:20, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:2, marginBottom:1}}>
                    After an injury, posttraumatic stress disorder can:
                    {"\n"}
                    </Text>
                    <Text style={styles.bullet}>- Get in the way of physical recovery</Text>
                    <Text style={styles.bullet}>- Contribute to new medical problems; or</Text>
                    <Text style={styles.bullet}>- Just make it harder to enjoy life.</Text>
                    <Text style={styles.link} onPress={()=> Linking.openURL('https://medlineplus.gov/ency/article/000925.htm')}>
                    {"\n"}
                    Click here for more information on PTSD.
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraph}>
                    The good news is that very good treatments for PTSD are available. 
                    Unfortunately, less than half of people with traumatic stress symptoms talk to anyone about their problems or get any professional help, even when their symptoms go on for a long time.
                    {"\n"}
                    </Text>
                    <Text style={styles.paragraph}>
                    This app will help you know when to reach out for help if you need it.
                    {"\n"}
                    </Text>
                    <Text style={{paddingBottom: 230}}></Text>
                </ScrollView>

        </View>
        );
    }
}
export default HowLongScreen;

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#2089DC', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 22, 
        textAlign: 'center', 
        alignSelf: 'stretch'
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize:20,
        alignSelf:'stretch',
        textAlign:'left',
        marginLeft:5,
        marginTop:2,
        marginBottom:1,
        color:'#2089DC'
    },
    bullet: {
        marginVertical:1, 
        marginHorizontal:18, 
        textAlign:'left', 
        alignSelf:'stretch', 
        fontWeight:'bold',
        fontSize:16
    },
    paragraph: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 16
    },
    link: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 16,
        color:'#2089DC',
        textDecorationLine: 'underline'
    }
});