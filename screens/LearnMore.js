import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class LearnMoreScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Learn About Trauma and Injury'
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text>
                    This is the Learn More screen{'\n'}
                </Text>
        </View>
        );
    }
}
export default LearnMoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});