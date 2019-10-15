import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class MainScreen extends Component {

    // Only the header on this MainScreen contains the Drawer button. (static navOptions)
    // screenProps are passed from the Navigator, allows onPress to call openDrawer, which opens
    // side drawer to the user
    static navigationOptions = ({screenProps}) => ({
        headerTitle: 'Pediatric PTSD',
        headerLeft: (<View style={{margin:5}}><Button title="Test"
                            onPress={()=> screenProps.openDrawer()}
                            title='More'></Button></View>)
    })

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
    },
});