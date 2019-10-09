import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import {
  StyleSheet, 
  View,
  Button,
  Alert,
  Image,
} from 'react-native';

//TODO set up MVC so button press goes to new (empty) page
//TODO fix alignment of button and icon

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}>
        <Image
          style={styles.image}
          source={require('./assets/healing_white_48dp_2x.png')}
          accessibilityLabel="Image of two band-aids criss-crossing"
        />
        <Button
          title="Learn About Trauma and Injury"
          onPress={() => Alert.alert('Go to Trauma and Injury Page')}
          style={styles.button}
          accessibilityLabel="Learn more about trauma and injury"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    color: '#c3fdff',
    width: '20%',
  },
  buttonBox: {
    height: '30%',
    width: '90%',
    backgroundColor: '#64b5f6',
    borderColor: '#1e88e5',
    borderRadius:10,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    height: '40%',
    aspectRatio: 1,
  }
});
