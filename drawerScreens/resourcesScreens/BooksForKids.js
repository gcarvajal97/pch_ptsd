import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Linking } from "expo";

export default class BooksForKidsScreen extends Component {

  render() {
    return (
      <View>
        <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL(
            'https://www.amazon.com/When-Feel-Scared-Way-Books/dp/0807589004/ref=sr_1_1?keywords=When+I+Feel+Scared+%28for+young+children%29&qid=1575675551&sr=8-1'
            )}
        accessible
        accessibilityLabel="Click here to visit Amazon to buy When I Feel Scared (The Way I Feel Books)"
        accessibilityHint="Navigates to Amazon to buy When I Feel Scared (The Way I Feel Books)">
        When I Feel Scared (The Way I Feel Books)
        </Text>
      {"\n"}Children will recognize similar experiences in their own lives as this little bear 
      describes feeling scared when he has a bad dream or his mother goes away. 
      Eventually our hero realizes that it's OK to be scared sometimes, and there 
      are ways he can help himself when he's frightened.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL(
            'https://www.amazon.com/What-When-Youre-Sad-Lonely/dp/1575421895/ref=sr_1_1?keywords=What+to+Do+When+You%E2%80%99re+Sad+%26+Lonely%3A+A+Guide+for+Kids&qid=1575675696&sr=8-1'
            )}
        accessible
        accessibilityLabel="Click here to visit Amazon to buy 
        What to Do When You're Sad & Lonely: A Guide for Kids"
        accessibilityHint="Navigates to Amazon to buy What to Do When You're Sad & Lonely: A Guide for Kids">
        What to Do When You're Sad & Lonely: A Guide for Kids
        </Text>
      {"\n"}All kids feel sad and lonely sometimes. Growing numbers of children are living with depression, a disease often mistaken for sadness. 
      This reassuring book offers strategies and tips kids can use to beat the blues and blahs, 
      get a handle on their feelings, make and keep friends, and enjoy their time alone. 
      The second part focuses on depression, bipolar disorder, grief, and other problems too 
      big for kids to handle on their own, and describes what it’s like to go to counseling. 
      Includes a Note to Grown-ups and a list of resources.
      </Text>
      <Text style={styles.paragrah}>
        <Text style={styles.link} onPress={()=> Linking.openURL(
            'https://www.amazon.com/What-When-Youre-Scared-Worried/dp/1575421534/ref=sr_1_1?keywords=What+to+Do+What+You%E2%80%99re+Scared+and+Worried%3A+A+Guide+for+Kids&qid=1575675773&sr=8-1'
            )}
        accessible
        accessibilityLabel="Click here to visit Amazon to buy What to Do What You’re Scared and Worried: A Guide for Kids"
        accessibilityHint="Navigates to Amazon to buy What to Do What You’re Scared and Worried: A Guide for Kids">
        What to Do What You’re Scared and Worried: A Guide for Kids
        </Text>
      {"\n"}From a dread of spiders to panic attacks, kids have worries and fears, just like adults. 
      This is a book kids can turn to when they need advice, reassurance, and ideas. 
      They’ll find out where fears and worries come from, practice Fear Chasers and Worry Erasers, 
      and learn to seek help for hard-to-handle fears they can’t manage on their own.
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