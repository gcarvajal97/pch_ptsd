import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class MainScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Pediatric PTSD'
    }

    render() {
        return (
            // Example of how navigation will work, using that anonymous function onPress
            <View style={styles.container}>
                <Text>
                    This is the Main screen{'\n'}
                    Should be adding our 3 card view components here{'\n\n'}
                    This test button below will show you how navigating screens will work in the future
                </Text>
            <Button title="Go to the next screen"
                onPress={() => this.props.navigation.navigate('Test')} />
        </View>
        );
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});