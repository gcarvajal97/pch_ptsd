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
        </View>
    );
  }
}

export default HowToTalk;