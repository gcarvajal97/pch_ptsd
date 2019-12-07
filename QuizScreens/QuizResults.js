import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";
import { Card } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

const content = {
    1: {title: 'Thinks a lot about what happened to them', 
        body1: 'Thinking and talking about what happened, especially in the first few days and weeks, is part of how we help ourselves recover from a scary experience.', 
        body2: "Do thoughts about it often pop into their mind even when they don't want them to? Does this bother them?"},
    2: {title: 'Has bad dreams or nightmares since the injury', 
        body1: "It's normal for kids to have bad dreams from time to time.", 
        body2: 'Are the nightmares worse or more frequent since the injury? Are they interfering with getting a good night’s sleep?'},
    3: {title: 'Gets upset or has physical reactions at reminders of what happened', 
        body1: 'When something scary happens, we learn to treat things connected to it as if they were danger signals. Sights, sounds, and even smells can be reminders.', 
        body2: 'Do these feelings happen nearly every day? Do they make it hard for your child to relax and have fun, or to concentrate on schoolwork?'},
    4: {title: 'Doesn’t want to talk about what happened or tries to push it out of their mind', 
        body1: 'Everyone needs to take a break sometimes from thinking about or talking about a scary experience. (And there may be times when you’re ready to talk but your child isn’t.)', 
        body2: 'Does your child seem to never want to think or talk about it with anyone, or does talking about it make them feel quite upset?'},
    5: {title: 'Wants to stay away from people, places, or things that are reminders of what happened', 
        body1: 'After something scary happens, reminders of what happened can make us feel very anxious, and we might start to avoid those things. ', 
        body2: 'Is avoiding reminders stopping your child from doing (safe) things they would otherwise be able to do, or from enjoying activities when they do manage to do them? '},
    6: {title: 'Afraid of something that they were not afraid of before (or a previous fear or worry seems to get worse)', 
        body1: 'After something scary happens, we can become afraid of things that are reminders of what happened.', 
        body2: 'Are fears stopping your child from doing (safe) things they would otherwise be able to do, or from enjoying activities even when they do manage to do them? '},
    7: {title: 'Not interested in usual activities, since the injury', 
        body1: 'One way we cope with overwhelming scary experiences is to “shut down” our emotions for a while. And kids may feel a bit down or stressed when dealing with a lot of changes after an injury.', 
        body2: 'Does your child seem to be not enjoying lots of things they used to like to do? Do they seem sad or withdrawn, or like their feelings are “shut down” much of the time?'},
    8: {title: 'Not interested in being with people they usually like being with, since the injury', 
        body1: 'One way we cope with overwhelming scary experiences is to “shut down” our emotions and not feel close to other people for a while. Sometimes other people are reminders of what happened or of how things have changed. ', 
        body2: 'Does your child seem to be having a really hard time feeling relaxed and close to friends and family they usually trust and enjoy time with? '},
    9: {title: 'Worries a lot that something else bad will happen', 
        body1: 'Being on the lookout for danger makes sense after something scary has happened. It’s how we learn to keep ourselves safe from things that are truly dangerous. ', 
        body2: 'Are your child’s feelings of being “on guard” for potential danger very strong? Does your child feel this way a lot of the time? Is it making it harder to get back to doing things they used to do? '},
    10: {title: 'Startles easily – for example, jumps if there is a sudden noise', 
        body1: 'A frightening experience can trigger an exaggerated physical startle response that takes some time to go away.', 
        body2: 'Is your child feeling so jumpy that it’s really hard to relax? Is it affecting his/ her sleep or ability to concentrate?'},
    11: {title: 'Seems irritable or has angry outbursts, since the injury', 
        body1: 'Stress and changes can lead to frustrations for injured kids. Feeling jumpy all the time, being tired or in pain can make anyone more easily angered. Some head injuries can lead to changes in ability to control emotions or behavior (be sure to ask your child’s doctor about what to expect). ', 
        body2: 'Is irritability making it hard for your child to get along with family or friends? Is this a big change in your child’s usual personality?'},
    12: {title: 'Has trouble paying attention to things, since the injury', 
        body1: 'When we are under a lot of stress, feel really jumpy or on guard, or have thoughts of what happened popping into mind, it can be hard to pay attention at times. Some head injuries can lead to concentration problems (be sure to ask your child’s doctor about what to expect).', 
        body2: 'Is difficulty concentrating getting in the way of schoolwork, or your child’s ability to take part in other activities or sports?'},
    13: {title: 'Has trouble falling or staying asleep, since the injury', 
        body1: 'Some sleep problems after an injury are a temporary reaction to disruptions in your child’s schedule and routines. But sleep problems can be made worse by pain from the injury, or by worries and thoughts that make it hard to relax. ', 
        body2: 'Is your child having a hard time falling asleep or staying asleep many nights? Is your child afraid to sleep alone?'},
    14: {title: 'Is still having pain or discomfort', 
        body1: 'Most injured children have pain, at least at first. Pain cannot always be managed completely, but doctors do their best to get it under control as soon as possible.', 
        body2: 'Your child may tell you they are in pain, or you might see the effects of pain in their behavior. Pain can make it harder to sleep and harder to concentrate. Follow up may be needed if your child’s pain is getting worse or if it interferes with getting a good night’s sleep or paying attention in school. '},
    15: {title: 'Has had other behavior changes since the injury', 
        body1: 'Many times behavior changes are temporary reactions to injury-related stresses and to normal life being turned “upside down”, at least for while. Frustrations or worries can lead to clingy or angry behaviors. Some head injuries can also lead to behavior changes (be sure to ask your child’s doctor about what to expect). ', 
        body2: ' Are behavior changes making it harder for your child to get along with people or to get back to regular activities? Have these changes lasted for more than a few weeks? '},
    16: {title: 'Is having trouble with returning to school or other activities', 
        body1: 'Returning to school may require physical accommodations (such as getting around on crutches). Stress and worry can sometimes make it harder to concentrate on schoolwork. And after an injury, there may be changes (at least for a while) in your child’s ability to participate in sports and other activities they enjoy. ', 
        body2: 'Are you worried about how things will go when your child returns to school? Is your child having trouble keeping up with schoolwork? Is your child very upset about missing out on sports or other activities because of the injury? '},
    17: {title: 'Brothers or sisters are upset or worried', 
        body1: 'Injury can affect the whole family. When a child is hurt or in the hospital, brothers and sisters may be worried, frightened, or even angry. It’s hard for parents to meet everyone’s needs at the same time. ', 
        body2: 'You may notice that your other children are missing your attention, or that they are upset or worried. '},
    18: {title: 'You (parent) are stressed or worried yourself', 
        body1: 'After your child is injured, there are lots of things that you as a parent have to cope with. It’s normal for parents to feel stress and to be concerned about the future. Many parents also have some traumatic stress reactions in the first few weeks. If these don’t get better in a month or so, they may signal a problem that needs attention. ', 
        body2: 'Have these feelings lasted for more than a month? Are worries about your child keeping you from being able to concentrate, get enough sleep, or get back to work or other activities? '},
};

export default class QuizResults extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Take the Quiz'
    }

    render() {
        // Receive results using props, apparently only way to do this. RN has an issue with params and StackNavigator at the moment.
        // It still works as intended, but I was trying to use the modern practice of NavigationActions and creating a NavigationService. 
        const results = this.props.navigation.getParam('results', 'nothing found');
        var count = 0;

        // Checks if the user filled out any reponses
        Object.entries(results).map(([key,v])=>{
            if (v <= 1) {
                count++
            }
        })

        // If they did not fill out responses, it displays a message
        if (count === 0) {
            return (
                <View style={styles.blankContainer}>
                    <Text style={styles.noResponse} accessible> Oops! Looks like you forgot to select any answers. </Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        {
                            // If they did fill out responses, it displays the correct cards
                            Object.entries(results).map(([key,v])=>{
                                if (v <= 1 && v >= 0) {
                                    return <Card key={key} 
                                    title={content[key].title} 
                                    titleStyle={{color:'#2089DC'}}
                                    accessible>
                                        <Text style={styles.paragraphBold}> Why It Happens: </Text>
                                        <Text style={styles.paragraph}> {content[key].body1} </Text>
                                        <Text style={styles.paragraphBold}> Is This a Problem?: </Text>
                                        <Text style={styles.paragraph}> {content[key].body2} </Text>
                                    </Card>
                                }
                            })
                        }
                    </ScrollView>
                </View>
            );
        }
    }
}


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
    blankContainer: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        margin: 10,
        marginVertical: 20,
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
    paragraphBold: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    title: {
        backgroundColor: '#2089DC', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 22, 
        textAlign: 'center', 
        alignSelf: 'stretch'
    },
    noResponse: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold', 
        fontSize: 20,
        color: '#2089DC', 
        textAlign: 'center', 
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        marginTop: -10,
    },
});