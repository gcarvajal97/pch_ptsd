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
                    <Text style={styles.headline}>
                    How Do New Fears Develop?
                    </Text>
                    <Text style={styles.paragraph}>
                    When something scary happens, we often learn to treat things connected to it as if they were danger signals. The next time something reminds us of what happened, our body reacts as if we were in danger, even if we are safe.

A trauma reminder can be anything – a place or a person, a sight or a sound, or even a smell. It might be something you hardly notice, till the scared feelings come flooding back.

How do we get over new fears - dealing with emotional triggers?

In managing emotional triggers, it can really help to face reminders over and over, in the course of normal life. We can feel very anxious at first, but each time we experience a trauma reminder and hang in there long enough to know that it does not lead to danger, the scared feelings tend to get weaker.

It is natural for your child to want to stay away from things that remind and upset him. But too much avoidance can get in the way of the natural recovery process, and make it harder to get over feeling scared.

As a parent, you play an important role in helping your child face new fears without getting stuck in avoidance.

How can parents tell if fears or worries are really a problem?

Ask yourself: Does feeling afraid or nervous stop your child from getting back to normal safe activities? Or stop him from enjoying things even if he manages to do them?

If so, you can help your child deal with new fears and worries before they become a bigger problem.

What can parents do?

1. Help your child make changes that really do help keep him safe.

Like wearing a helmet, crossing the street carefully, or telling you where he is going.
2. Be a "reality check" for your child.

If your child is nervous about doing something, talk together and help her figure out: "Is this really helping me stay safe?” OR “Am I avoiding it just so I will not feel nervous?"
3. Help your child understand "trauma reminders"/emotional triggers and avoidance.

Sometimes kids need help to figure out what makes them feel scared or nervous.
4. Encourage your child.

Help him keep doing those safe things that make him nervous -- and praise his courage when he does!
5. Notice your own worries.

Ask yourself: Do my worries stop me from letting my child do things he really should be allowed to do?
Use a trusted friend or family member as a “reality check” for yourself – to help you sort through your worries about your child’s safety.
When to get more help

If you are not sure whether your child's worries or fears are realistic, or how to encourage your child to face things that he is avoiding, get some help.

Talk with your family doctor, school counselor, or someone else you trust, or seek a counselor who can help you and your child in managing emotional triggers and with traumatic stress reactions.
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
    bulletLight: {
        marginVertical:1, 
        marginHorizontal:18, 
        textAlign:'left', 
        alignSelf:'stretch', 
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
    paragraphBold: {
        textAlign:'left',
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 14,
        marginTop: 5,
        fontWeight:'bold'
    },
    headline: {
        fontWeight: 'bold',
        fontSize:20, alignSelf:'stretch',
        textAlign:'left',
        marginLeft:5, 
        marginTop:4, 
        marginBottom:3, 
        color:'#2089DC'}
});