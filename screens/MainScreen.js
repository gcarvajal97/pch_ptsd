import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
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
                <View style={styles.buttonBox}>
                    <Image
                        style={styles.image}
                        // importing image from assets file
                        source={require('../assets/healing_white_48dp_2x.png')}
                        accessibilityLabel="Image of two band-aids criss-crossing" />
                    <Button
                        title="Learn About Trauma and Injury"
                        style={styles.button}
                        accessibilityLabel="Learn more about trauma and injury"

                        // navigates to the LearnMore page
                        onPress={() => this.props.navigation.navigate('LearnMore')} />
                </View>
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
    button: {
        color: '#c3fdff',
        width: '20%',
    },
    buttonBox: {
        height: '30%',
        width: '90%',
        backgroundColor: '#64b5f6',
        borderColor: '#1e88e5',
        borderRadius:10,
    },
    image: {
        flex: 1,
        alignItems: 'center',
        height: '40%',
        aspectRatio: 1,
    },    
});