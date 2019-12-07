import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";

export default class BooksForParentsScreen extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL(
            'https://www.amazon.com/Parents-Guide-Building-Resilience-Children/dp/1581102267/ref=sr_1_1?keywords=A+Parent%E2%80%99s+Guide+to+Building+Resilience+in+Children+and+Teens%3A+Giving+Your+Child+Roots+and+Wings.&qid=1575674996&sr=8-1'
            )}
        accessible
        accessibilityLabel="Click here to visit Amazon to buy A Parent’s Guide to 
        Building Resilience in Children and Teens: Giving Your Child Roots and Wings"
        accessibilityHint="Navigates to Amazon to buy A Parent’s Guide to 
        Building Resilience in Children and Teens: Giving Your Child Roots and Wings">
        A Parent’s Guide to Building Resilience in Children and Teens: Giving Your Child Roots and Wings
        </Text>
      {"\n"}Today’s children face a great deal of stress — academic performance, heavy scheduling, 
      high achievement standards, media messages, peer pressures, family tension. 
      Without healthier solutions, they often cope by talking back, giving up, or 
      indulging in unhealthy behaviors. Show your child how to bounce back — and THRIVE — 
      with coping strategies from one of the nation’s foremost experts in adolescent medicine.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL(
            'https://www.amazon.com/Freeing-Your-Child-Anxiety-Practical/dp/0767914929/ref=sr_1_1?keywords=Freeing+Your+Child+from+Anxiety%3A+Powerful%2C+Practical+Solutions+to+Overcome+Your+Child%27s+Fears%2C+Worries+and+Phobias.&qid=1575675183&sr=8-1'
            )}
        accessible
        accessibilityLabel="Click here to visit Amazon to buy Freeing Your Child 
        from Anxiety: Powerful, Practical Solutions to Overcome Your Child's Fears, Worries and Phobias"
        accessibilityHint="Navigates to Amazon to buy 
        Freeing Your Child from Anxiety: Powerful, Practical Solutions to Overcome Your Child's Fears, Worries and Phobias">
        Freeing Your Child from Anxiety: Powerful, Practical Solutions to Overcome Your Child's Fears, Worries and Phobias
        </Text>
      {"\n"}Anxiety is the number one mental health problem facing young people today.
      Childhood should be a happy and carefree time, yet more and more children today are exhibiting symptoms of 
      anxiety, from bedwetting and clinginess to frequent stomach aches, nightmares, 
      and even refusing to go to school. Parents everywhere want to know: 
      All children have fears, but how much is normal? How can you know when a 
      stress has crossed over into a full-blown anxiety disorder? Most parents 
      don’t know how to recognize when there is a real problem and how to deal with it when there is.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL(
            'https://www.amazon.com/Children-Trauma-Guide-Parents-Professionals/dp/0787910716/ref=sr_1_1?keywords=Children+and+Trauma%3A+A+Guide+For+Parents+and+Professionals&qid=1575675281&sr=8-1'
            )}
        accessible
        accessibilityLabel="Click here to visit Amazon to buy Children and Trauma: A Guide for Parents and Professionals"
        accessibilityHint="Navigates to Amazon to buy Children and Trauma: A Guide for Parents and Professionals">
        Children and Trauma: A Guide for Parents and Professionals
        </Text>
      {"\n"}Childhood traumas range widely in their severity and impact. 
      A car accident, an earthquake or flood, being attacked by a dog, 
      undergoing a frightening medical treatment? All are distinctly different 
      events yet all provoke common symptoms of psychological trauma. 
      These symptoms may include fearfulness, nightmares, and dramatic 
      behavioral or personality changes. And parental anxiety over changes in 
      a child can, in turn, complicate the healing process.
      </Text>
    </View>
    );
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
  title: {
      backgroundColor: '#2089DC', 
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: 22, 
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
  bullet: {
      marginVertical:1, 
      marginHorizontal:18, 
      textAlign:'left', 
      alignSelf:'stretch', 
      fontWeight:'bold',
      fontSize:14
  },
  paragraphTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 3,
    color: '#2089DC'
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 14,
    marginVertical: 2,
  },
  link: {
      alignSelf:"center", 
      paddingVertical:1, 
      paddingHorizontal:5,
      fontSize: 16,
      fontWeight: 'bold',
      color:'#2089DC',
      textDecorationLine: 'underline',
      marginTop: 4,
      marginTop: 3,
  },
  image: {
    flex: 1,
    aspectRatio: 1.40,
    resizeMode: 'contain'
  }
});