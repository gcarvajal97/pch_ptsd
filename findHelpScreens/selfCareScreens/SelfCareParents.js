import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class SelfCareParents extends Component {

  render() {
    return (
            <Text>

                <Text style={styles.subTitle}>
                    Taking care of yourself: Re-experiencing{"\n"}
                </Text>
                <Text style={styles.bullet}>
                    -Talk with friends or family about your own experiences and feelings about your 
                    child's injury.{"\n"}
                    -Help yourself deal with overwhelming or troubling thoughts by learning how to 
                    "take a break" from them at times - do something fun, spend time with friends, get 
                    busy with other activities.{"\n"}
                    -If talking with your child about his or her reactions makes you feel upset or 
                    worried, it's especially important to find someone who can be a listening ear for 
                    you.{"\n"}  
                </Text>

                <Text style={styles.subTitle}>
                    Taking care of yourself: Avoidance{"\n"}
                </Text>
                <Text style={styles.bullet}>
                    -Notice when you feel worried or nervous - are there situations in which this 
                    seems to happen more?{"\n"}
                    -If avoiding reminders is keeping you from doing important things, enlist a 
                    friend or family member to help you - ask them to encourage you to keep doing those 
                    things and congratulate you when you do!{"\n"}
                    -Be especially careful that any new worries you might have don't stop you from 
                    letting your child do things that are safe and appropriate for his /her age. Use a 
                    friend or family member as a "reality check" for yourself.{"\n"}
                    -Try to make yourself do just one or two activities or spend time with friends, 
                    even if you don't really feel like it at first. Sometimes "just doing it" can be the 
                    first step to feeling a little better.{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    Taking care of yourself: Hyper-Arousal{"\n"}
                </Text>
                <Text style={styles.bullet}>
                    -Remember that feeling a bit jumpy or worried is a natural reaction to going 
                    through something scary, and that it will get better with time.{"\n"}
                    -Even if you can only get a short break from caring for your child, home, work, 
                    use it to get some exercise and do things that relax you -- go for a walk, relax 
                    with a funny movie or a good book.{"\n"}
                    -Try to keep some daily routines the same.{"\n"}
                    -Try to get to bed at a regular time, and to make the hour before bed a 
                    relaxing time.{"\n"}
                    -Be especially careful not to increase your smoking or alcohol use to deal 
                    with stress.{"\n"}
                </Text>

                <Text style={styles.subTitle}>
                    Getting extra help for yourself{"\n"}
                </Text>
                <Text style={styles.paragraph}>
                    -Think about getting some extra help if your own feelings and reactions after 
                    your child's injury are bothering you, or are making it harder for you to help your 
                    child get back into normal activities.
                </Text>                
            </Text>
    );
  }
}

export default SelfCareParents;

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
      backgroundColor: 'white', 
      color: '#2089DC', 
      fontWeight: 'bold', 
      fontSize: 22, 
      textAlign: 'left', 
      alignSelf: 'stretch'
  },
  subTitle: {
    backgroundColor: 'white', 
    color: '#2089DC', 
    alignSelf: 'stretch', 
    paddingLeft: 15, 
    paddingRight:15, 
    fontSize: 15, 
    borderBottomWidth:2, 
    borderBottomColor:'#2089DC',
  },
  paragraph: {
      alignSelf:"center", 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 14,
      marginTop: 5,
      fontStyle:'italic',
  },
  bullet: {
    marginHorizontal:30, 
    textAlign:'left', 
    alignSelf:'stretch', 
    fontSize:14,
    paddingTop: 4,
},
question: {
    alignSelf:"center", 
    paddingVertical:1, 
    paddingHorizontal:5,
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
},
});