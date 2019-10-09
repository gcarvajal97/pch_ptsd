import React from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button,
  Alert,
  Dimensions,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}/>
      <Button
          title="Learn About Trauma and Injury"
          onPress={() => Alert.alert('Simple Button pressed')}
          style={[styles.button]}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    color: "#5d99c6",
    width: '90%',
  },
  buttonBox: {
    width: '90%',
    height: '20%',
    backgroundColor: '#90caf9',
    borderColor: '#c4110e',
    borderRadius:10,
  }
});
