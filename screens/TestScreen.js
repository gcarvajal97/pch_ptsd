import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class TestScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Test Screen'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    This is a test screen{'\n'}
                    Navigation bar should be showing a back button to return
                </Text>
        </View>
        );
    }
}
export default TestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});