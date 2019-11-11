import React, { Component } from 'react';
import { Card, View, Text, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import QuickTipsCard from '../findHelpScreens/QuickTipsCard';

class QuickTips extends Component {
  
  static navigationOptions = {
    headerTitle: 'Find Help'
  }

  render() {
    return (
      <View style={styles.container}> 
        <ScrollView>
          <QuickTipsCard />
            <Text style={styles.paragraphTitle}>
            1. Let your child know that they are safe.
            </Text>
            <Text style={styles.paragraph}>
            In the first days and weeks following an injury many children fear that something bad might 
            happen to them again. Let your child know that they are safe now. Give them extra hugs, 
            even your teens. Younger children may need more cuddle time.
            </Text>
            <Text style={styles.paragraphTitle}>
            2. Allow children to talk about their feelings, and their worries, if they want to.
            </Text>
            <Text style={styles.paragraph}>
            Let your child know that it is OK to feel a little upset; many children feel upset, worried, 
            or confused after getting hurt. Allow your child to talk about their feelings if they want to. 
            If they do not want to talk, stress coping strategies for kids can include writing a story or 
            drawing a picture.
            </Text>
            <Text style={styles.paragraphTitle}>
            3. Go back to normal routines.
            </Text>
            <Text style={styles.paragraph}>
            It is important to help your child get plenty of sleep, eat regular meals, and keep up with 
            schoolwork. Encourage your child to go back to spending time with friends.
            {"\n"}
            If the injury gets in the way of things s/he used to do – talk with your doctor about what your 
            child can do, and be creative in figuring out how to get your child back to SOME normal 
            activities.
            </Text>
            <Text style={styles.paragraphTitle}>
            4. Increase time with family and friends.
            </Text>
            <Text style={styles.paragraph}>
            Children who get support from family and friends seem to do better in recovering after upsetting 
            events. Try reading together, playing sports or games, or watching movies together.
            </Text>
            <Text style={styles.paragraphTitle}>
            5. Take time to deal with your own feelings.
            </Text>
            <Text style={styles.paragraph}>
            In addition to all the things you do to help your child, it’s important to remember to take good 
            care of yourself. It will be harder to help your child if you are really worried, upset or 
            overwhelmed. Talk about your feelings with other adults, such as family, friends, clergy, 
            your doctor or a counselor.
            </Text>
            <Text style={styles.paragraphTitle}>
            6. Keep in mind people in the same family can react in different ways.
            </Text>
            <Text style={styles.paragraph}>
            Remember, your child's feelings and worries about the injury might be different from yours. 
            Brothers and sisters can feel upset too.
            {"\n"}
            An important way that parents can help is to pay special attention to how your child's responses 
            might be different from yours. Those are the situations where it can be harder to know how to help.
            </Text>
        </ScrollView>
      </View>
    );
  }
}

export default QuickTips;

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
  paragraphTitle: {
      fontWeight: 'bold',
      fontSize:16,
      alignSelf:'stretch',
      textAlign:'left',
      marginLeft:5,
      marginTop:6,
      marginBottom:3,
      color:'#2089DC'
  },
  paragraph: {
      alignSelf:"center", 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 14,
      marginTop: 5,
  }
});
x