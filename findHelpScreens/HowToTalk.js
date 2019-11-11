import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions} from "react-native";
import { Video } from 'expo-av';
import { Linking } from "expo";
import NavigationService from '../components/NavigationService';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

class HowToTalk extends Component {
  
  static navigationOptions = {
    headerTitle: 'Find Help'
  }

  render() {
    return (
        <View style={styles.container}>
            <Text>
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
                    style={{ height: 204, width: '100%', maxHeight: 254}}
              />
                      <Text>
            After something scary like an injury, it is not always easy to know how to talk with your child about it, and how best to help.
        </Text>
        <ScrollView>
            <Text>
                Here are some things to help you when talking about trauma with your child:
                1. Be available to listen.
                2. Provide opportunities to talk.

                Look for opportunities to hear how your child is doing.
                Choose a time and a place where you both feel comfortable - think about when and where your child tends to talk most openly.
                3. Ask your child direct questions. "How are you doing with all of this?"
                4. Listen carefully to what your child has to say to you.

                Wait until your child finishes before jumping in.
                Repeat back what you heard in your own words to be sure you understood.
                Try to hold off giving advice until you have a good understanding of what your child is going through. What's been most upsetting to her? How is she feeling now?

                What do I say?
                1. Just listening is helpful.
                - You can give your child a chance to work out his thoughts and feelings by saying them out loud to you.
                2. Answer your child’s questions as honestly as you can.
                - Keep in mind their age and what they are able to understand.
                3. Help your child find words for strong feelings.
                - Describing and understanding his reactions is a first step to dealing with them.
                4. Share your own experiences within limits.
                - Be a model for using good coping skills.
                - Remember not to burden your child with your own worries. Turn to other adults you trust if you need a listening ear.
                
                What if my child does not want to talk?
                1. Be patient. Your child may not be ready to talk at the same time you are.
                2. Do not force the issue. Do not try to force your child to talk. Some people like to think about things for a while first.
                3. Encourage other ways of expressing thoughts and feelings. Your child can draw a picture, write a story, or keep a diary or journal.
                4. Help your child stay connected with friends and adults you both trust, so you will know he has people to talk with when he is ready.
                5. Some reactions are not said in words.

                Even without words, you can try to be aware of your child’s reactions.
                Think about how you can usually tell how your child is feeling - you might see changes in behavior, facial expressions, or body language.

                Things to remember:

                1. Different people have different reactions.
                - As you think about how to help your child, try to separate what you are feeling from what your child is experiencing and what he needs.
                2. Make sure your own feelings do not get in the way.
                - If talking with your child is upsetting to you, do your best to stay calm and collected during the conversation and be sure to get support for yourself.
            </Text>
        </ScrollView>
        </View>
    );
  }
}

export default HowToTalk;