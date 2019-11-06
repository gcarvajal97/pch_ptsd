import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions} from "react-native";
import { Video } from 'expo-av';
import { Linking } from "expo";
import NavigationService from '../components/NavigationService';

// Tested and works on iOS
// Tested and works on Android

class HowToTalk extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Find Help'
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text style={styles.title}>
                  How To Talk With Your Child
                </Text>
                <Video
                    source={require('../assets/videos/vidHowToTalk.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_STRETCH}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: 204, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 14, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                />
                <Text style={styles.subTitle}>
                  <Text style={{ fontWeight: 'bold' }}>It's not always easy to know how to talk with your child. </Text> 
                  Here are some tips to help.
                </Text>
                <ScrollView>
                    <Text style={styles.paragraph}>
                    After something scary like an injury, it is not always easy to know how to talk 
                    with your child about it, and how best to help.
                    </Text>
                    <Text style={styles.paragraphTitle}>
                    Here are some things to help you when talking about trauma with your child:
                    </Text>
                    <Text style={styles.bullet}>1. Be available to listen.</Text>
                    <Text style={styles.subBullet}>- Look for opportunities to hear how your child is doing.</Text>
                    <Text style={styles.subBullet}>- Choose a time and a place where you both feel comfortable - think about when and where your child tends to talk most openly.</Text>
                    <Text style={styles.bullet}>2. Provide opportunities to talk.</Text>
                    <Text style={styles.bullet}>3. Ask your child direct questions. "How are you doing with all of this?"</Text>
                    <Text style={styles.bullet}>4. Listen carefully to what your child has to say to you.</Text>
                    <Text style={styles.subBullet}>- Wait until your child finishes before jumping in.</Text>
                    <Text style={styles.subBullet}>- Repeat back what you heard in your own words to be sure you understood.</Text>
                    <Text style={styles.subBullet}>- Try to hold off giving advice until you have a good understanding of what your child is going through. What's been most upsetting to her? How is she feeling now?</Text>
                    
                    <Text style={styles.paragraphTitle}>
                    What do I say?
                    </Text>
                    <Text style={styles.bullet}>1. Just listening is helpful.</Text>
                    <Text style={styles.subBullet}>- You can give your child a chance to work out his thoughts and feelings by saying them out loud to you.</Text>
                    <Text style={styles.bullet}>2. Answer your child’s questions as honestly as you can.</Text>
                    <Text style={styles.subBullet}>- Keep in mind their age and what they are able to understand.</Text>
                    <Text style={styles.bullet}>3. Help your child find words for strong feelings.</Text>
                    <Text style={styles.subBullet}>- Describing and understanding his reactions is a first step to dealing with them.</Text>
                    <Text style={styles.bullet}>4. Share your own experiences within limits.</Text>
                    <Text style={styles.subBullet}>- Be a model for using good coping skills.</Text>
                    <Text style={styles.subBullet}>- Remember not to burden your child with your own worries. Turn to other adults you trust if you need a listening ear.</Text>                    

                    <Text style={styles.paragraphTitle}>
                    What if my child does not want to talk?
                    </Text>
                    <Text style={styles.bullet}>1. Be patient. Your child may not be ready to talk at the same time you are.</Text>
                    <Text style={styles.bullet}>2. Do not force the issue. Do not try to force your child to talk. Some people like to think about things for a while first.</Text>
                    <Text style={styles.bullet}>3. Encourage other ways of expressing thoughts and feelings. Your child can draw a picture, write a story, or keep a diary or journal.</Text>
                    <Text style={styles.bullet}>4. Help your child stay connected with friends and adults you both trust, so you will know he has people to talk with when he is ready.</Text>
                    <Text style={styles.bullet}>5. Some reactions are not said in words.</Text>
                    <Text style={styles.subBullet}>- Even without words, you can try to be aware of your child’s reactions.</Text>
                    <Text style={styles.subBullet}>- Think about how you can usually tell how your child is feeling - you might see changes in behavior, facial expressions, or body language.</Text>                    

                    <Text style={styles.paragraphTitle}>
                    Things to remember:
                    </Text>
                    <Text style={styles.bullet}>1. Different people have different reactions.</Text>
                    <Text style={styles.subBullet}>- As you think about how to help your child, try to separate what you are feeling from what your child is experiencing and what he needs.</Text>
                    <Text style={styles.bullet}>2. Make sure your own feelings do not get in the way.</Text>
                    <Text style={styles.subBullet}>- Think about how you can usually tell how your child is feeling - you might see changes in behavior, facial expressions, or body language.</Text>
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
        alignSelf: 'stretch', 
        paddingLeft: 15, 
        paddingRight:15, 
        fontSize: 15, 
        borderBottomWidth:2, 
        borderBottomColor:'#2089DC',
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
    subBullet: {
      marginVertical:1, 
      marginHorizontal:30, 
      textAlign:'left', 
      alignSelf:'stretch', 
      fontSize:14,
    },
    paragraph: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 14,
        marginTop: 5,
    }
});