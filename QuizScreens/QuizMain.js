import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";

class QuizMain extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Quiz'
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text>
                    This is the Main Quiz Screen
                </Text>
        </View>
        );
    }
}
export default QuizMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});