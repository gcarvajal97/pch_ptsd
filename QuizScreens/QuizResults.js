import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";

export default class QuizResults extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Quiz Results'
    }

    render() {
        // Receive results using props, apparently only way to do this at the moment. RN has an issue with params and StackNavigation as the moment
        // It still works as intended, was just trying to use the modern practice of NavigationActions and created a NavigationService. 
        const results = this.props.navigation.getParam('results', 'nothing found');
        console.log(results);
        console.log(results[1]);
        console.log(results[9]);
        console.log(results[16]);
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text>
                    This is the Quiz Results Screen
                </Text>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    bullet: {
        marginVertical:1, 
        marginHorizontal:18, 
        textAlign:'left', 
        alignSelf:'stretch', 
        fontWeight:'bold',
        fontSize:14,
        paddingTop: 4,
    },
    paragraph: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 14,
        marginTop: 5,
    },
});