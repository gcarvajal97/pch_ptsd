import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class HowLongDoReactionsLast extends Component {

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
        </View>
        );
    }
}
export default HowLongDoReactionsLastScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});