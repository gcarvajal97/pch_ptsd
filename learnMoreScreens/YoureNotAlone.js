import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from 'expo-av';

class YoureNotAlone extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Learn More'
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                <Video
                    source={require('../assets/videos/vidAlone.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_STRETCH}
                    shouldPlay
                    useNativeControls
                    style={{ height: undefined, width: Dimensions.get('window').width, flex: 1, maxHeight: 254 }}
                />
                </View>
            </View>
        );
    }
}
export default YoureNotAlone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    }
});