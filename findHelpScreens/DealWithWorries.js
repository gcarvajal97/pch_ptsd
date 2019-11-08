import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Video } from 'expo-av';

class DealWithWorries extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Find Help'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ backgroundColor: '#2089DC', color: 'white', fontWeight: 'bold', fontSize: 22, textAlign: 'center', alignSelf: 'stretch' }}>
                    Dealing With Fears and Worries
                </Text>
                <Video
                    source={require('../assets/videos/vidDealWithWorries.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: 204, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 14, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                    accessibilityLabel="Video on how how injury is common"
                    accessibilityHint="Video on how how injury is common"
                />
                <Text style={{ backgroundColor: '#2089DC', color: 'white', alignSelf: 'stretch', paddingLeft: 15, fontSize: 15, borderBottomWidth:2, borderBottomColor:'#2089DC'}}>
                    <Text style={{ fontWeight: 'bold' }}>New fears or worries?</Text> Watch the video and read below to learn more about these symptoms.
                </Text>
                <ScrollView>
                <Text style={{fontWeight: 'bold', fontSize:20, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:4, marginBottom:3, color:'#2089DC'}}>
                    Headline
                    </Text>
                <Text style={styles.bullet}>bullet</Text>
                <Text style={styles.bullet}>bullet</Text>
                <Text style={styles.bullet}>bullet</Text>
                <Text style={styles.paragraph}>
                    Filler text for now, until updated.
                    Right now, hundreds of thousands of children across the country are recovering from an injury. 
                    Like you, their parents and other caring adults want to help them the best way possible. 
                    While it is important to tend to the wounds and rehabilitation, it is just as important 
                    to remember to look beyond the physical injuries.
                    </Text>
                <Text style={styles.paragraph}>
                    Some more filler text, until updated.
                    With all the doctors, nurses, and therapists who will treat your child’s injury, 
                    remember that no one is more important than you for your child’s recovery. 
                    In making this application, we took the best information available from 
                    science and best practices to help you and your child recover after an injury.
                    </Text>        
                </ScrollView>
            </View>
        );
    }
}
export default DealWithWorries;

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
    }
});