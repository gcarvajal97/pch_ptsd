import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class MainScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Pediatric PTSD'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    This is the Main screen
                    </Text>
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