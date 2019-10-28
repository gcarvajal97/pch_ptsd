import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class WhenToGetOutsideHelp extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'When To Get Outside Help'
    }

    render() {
        return (
            // renders the when to get outside help screen
            <View style={styles.container}>
                <Text>
                    This is the when to get outside help screen{'\n'}
                </Text>
        </View>
        );
    }
}
export default WhenToGetOutsideHelp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});