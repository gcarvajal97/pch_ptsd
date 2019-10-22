import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions} from "react-native";
import { Video } from 'expo-av';

class HowLongScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'How Long Do Reactions Last'
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text>
                    This is the "How Long Do Reactions Last screen{'\n'}
                </Text>
                <Video
                    source={require('../assets/videos/vidHowLong.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_STRETCH}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: undefined, width: Dimensions.get('window').width, flex: 1, maxHeight: 254 }}
                    style={{ height: 208, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 12, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                />
        </View>
        );
    }
}
export default HowLongScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});