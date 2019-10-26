import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class ReactionsToInjury extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Reactions to Injury'
    }

    render() {
        return (
                <View style={styles.container}>
                    <Text>
                        Reactions to injury, temp screen.
                    </Text>
                </View>
        );
    }
}
export default ReactionsToInjury;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});