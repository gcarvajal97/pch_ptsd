import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello, Group 16! {"\n\n"}
        We are up and running! {"\n\n"}
        ...on Android at least. Ha{"\n\n"}
        Can confirm on iOS as well {"\n\n"}
        ...at least on an iPhone 8 S. Woo!{"\n\n"}
        ...also on iPhone 11 Pro Max{"\n\n"}
        ...and Pixel 3!{"\n\n"}
      </Text>
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
});
