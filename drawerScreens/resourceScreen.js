import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import NavigationService from '../components/NavigationService';

class FindHelpScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Find Help to Recovery'
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text>
                    This is the resource screen.
                </Text>
                <Button title='Go Back' onPress={()=>NavigationService.navigateDrawer('Home')}>
                </Button>
        </View>
        );
    }
}
export default FindHelpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});