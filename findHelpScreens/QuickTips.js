import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

class QuickTips extends Component {
  
  static navigationOptions = {
    headerTitle: 'Find Help'
  }

  render() {
    return (
      <View style={styles.container}> 
        1. Let your child know that they are safe.
        In the first days and weeks following an injury many children fear that something bad might 
        happen to them again. Let your child know that they are safe now. Give them extra hugs, 
        even your teens. Younger children may need more cuddle time.

        2. Allow children to talk about their feelings, and their worries, if they want to.
        Let your child know that it is OK to feel a little upset; many children feel upset, worried, 
        or confused after getting hurt. Allow your child to talk about their feelings if they want to. 
        If they do not want to talk, stress coping strategies for kids can include writing a story or 
        drawing a picture.

        3. Go back to normal routines.
        It is important to help your child get plenty of sleep, eat regular meals, and keep up with 
        schoolwork. Encourage your child to go back to spending time with friends.
        If the injury gets in the way of things s/he used to do – talk with your doctor about what your 
        child can do, and be creative in figuring out how to get your child back to SOME normal 
        activities.

        4. Increase time with family and friends.
        Children who get support from family and friends seem to do better in recovering after upsetting 
        events. Try reading together, playing sports or games, or watching movies together.

        5. Take time to deal with your own feelings.
        In addition to all the things you do to help your child, it’s important to remember to take good 
        care of yourself. It will be harder to help your child if you are really worried, upset or 
        overwhelmed. Talk about your feelings with other adults, such as family, friends, clergy, 
        your doctor or a counselor.

        6. Keep in mind people in the same family can react in different ways.
        Remember, your child's feelings and worries about the injury might be different from yours. 
        Brothers and sisters can feel upset too.
        An important way that parents can help is to pay special attention to how your child's responses 
        might be different from yours. Those are the situations where it can be harder to know how to help.
      </View>
    );
  }
}

export default QuickTips;
