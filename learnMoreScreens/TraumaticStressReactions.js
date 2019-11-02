import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, AccessibilityInfo} from 'react-native';
import { Video } from 'expo-av';

class TraumaticStressReactions extends Component {
  
  static navigationOptions = {
    headerTitle: 'Learn More'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Traumatic Stress Reactions
        </Text>
        <Video
            source={require('../assets/videos/vidStressReactions.mp4')}
            rate={1.0}
            volume={1.0}
            resizeMode={Video.RESIZE_MODE_STRETCH}
            resizeMode={Video.RESIZE_MODE_COVER}
            shouldPlay
            useNativeControls
            style={{ height: 204, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 14, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
            accessibilityLabel="Video on what are traumatic stress reactions."
            accessibilityHint="Video on what are traumatic stress reactions."
        />
        <Text style={{ backgroundColor: '#2089DC', color: 'white', alignSelf: 'stretch', paddingLeft: 15, paddingRight:15, fontSize: 15, borderBottomWidth:2, borderBottomColor:'#2089DC'}}>
                    <Text style={{ fontWeight: 'bold' }}>Stress reactions to injury are normal</Text> However, three major reactions 
                    should be monitored.
                </Text>
        <ScrollView>
        <Text style={styles.paragraph}>
        There are three main types of traumatic stress reactions:
        </Text>
        <Text style={styles.bullet}>
        Re-experiencing: Reliving what happened
        </Text>
        <Text style={styles.bullet}>
        Avoidance: Staying away from reminders
        </Text>
        <Text style={styles.bullet}>
        Hyper-arousal: Feeling anxious or jumpy
        </Text>
        <Text style={styles.paragraph}>
        <Text style={{ fontWeight: 'bold' }}>Note: </Text>These reactions are normal and are not considered post traumatic stress reactions 
        or PTSD unless they persist for over a month and interfere with daily life.
        </Text>
        <Text style={styles.paragraphTitle}>
        RE-EXPERIENCING
        </Text>
        <Text style={styles.paragraph}>
        Re-experiencing means that your child keeps thinking a lot about the trauma, even when he does not want to.
        </Text>
        <Text style={styles.paragraph}>
        Some re-experiencing is normal and natural. Thinking a lot about what happened, especially at first, 
        is part of how we help ourselves recover from a scary experience.
        </Text>
        <Text style={styles.paragraph}>
        Too much re-experiencing can be very distressing. 
        Your child might have nightmares or “flashbacks” that make her feel 
        like she is going through the trauma all over again. 
        She may feel really upset or even have physical symptoms 
        when something – a sight, a sound, a smell – reminds her of what happened.
        </Text>
        <Text style={styles.paragraphTitle}>
        AVOIDANCE
        </Text>
        <Text style={styles.paragraph}>
        Avoidance symptoms can start by trying not to think or talk about the trauma, 
        or anything connected with it. Sometimes kids want to stay away from people, 
        places or activities because these reminders upset them. 
        And children sometimes develop new fears or worries.
        </Text>
        <Text style={styles.paragraph}>
        Of course, it can be good common sense to be more cautious after an injury. 
        Children may become more aware of safety -- remembering to wear a seat belt, 
        not running into the street after a ball, or staying away from dogs they do not know.
        </Text>
        <Text style={styles.paragraph}>
        But extreme avoidance or fears can become a real problem. 
        Avoidance can interfere with daily life and stop your child 
        from getting back to enjoying things that she usually likes to do.
        </Text>
        <Text style={styles.paragraphTitle}>
        HYPER-AROUSAL
        </Text>
        <Text style={styles.paragraph}>
        Hyper-arousal also starts with a natural and normal response to danger – the “fight or flight response.” 
        After an injury or accident, this “fight or flight” response might not turn off, even when you are safe.
        </Text>
        <Text style={styles.bullet}>Your heart keeps pounding and you start sweating.</Text>
        <Text style={styles.bullet}>Your body is still on the lookout for danger.</Text>
        <Text style={styles.paragraph}>
        After a scary situation like being injured, your child might have the feeling 
        that something bad could happen again at any time, or might jump at any loud noise.
        </Text>
        <Text style={styles.paragraph}>
        The physical feelings that go along with hyper-arousal can feel scary themselves:
        </Text>
        <Text style={styles.bullet}>Your child might suddenly feel her heart racing or head pounding.</Text>
        <Text style={styles.bullet}>She might get worried about what these symptoms mean.</Text>
        <Text style={styles.paragraph}>
        Feeling “on guard” for danger much of the time can lead to:
        </Text>
        <Text style={styles.bullet}>trouble sleeping,</Text>
        <Text style={styles.bullet}>trouble concentrating, and</Text>
        <Text style={styles.bullet}>being extra cranky or irritable.</Text>
        </ScrollView>
    </View>
    );
  }
}

export default TraumaticStressReactions;

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