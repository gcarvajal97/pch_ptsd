import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Video } from 'expo-av';

class YoureNotAlone extends Component {
    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Learn More'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ backgroundColor: '#2089DC', color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center', alignSelf: 'stretch' }}>
                    You Are Not Alone
                </Text>
                <Video
                    source={require('../assets/videos/vidAlone.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: 208, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 12, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                />
                <Text style={{ backgroundColor: '#2089DC', color: 'white', alignSelf: 'stretch', paddingLeft: 15, fontSize: 15}}>
                    <Text style={{ fontWeight: 'bold' }}>Your child is not alone.</Text> Every year, millions of children in the United States are injured.
                </Text>
            </View>
        );
    }
}
export default YoureNotAlone;

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
});