import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NavigationService from '../components/NavigationService';

class ResourceScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Resources',
        headerLeft: (<View style={{ margin: 5 }}><Button
        onPress={()=>NavigationService.navigateDrawer('Home')}
        title='Back'></Button></View>)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    This is the resource screen.
                </Text>
        </View>
        );
    }
}
export default ResourceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});