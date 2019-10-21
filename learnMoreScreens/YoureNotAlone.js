import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class YoureNotAlone extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'You Are Not Alone'
    }

    render() {
        return (
                <View style={styles.container}>
                    <Text>
                        You are not alone screen.
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
        justifyContent: 'flex-start'
    }
});