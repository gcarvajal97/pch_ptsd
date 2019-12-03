import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";

export default class QuizResults extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Take the Quiz'
    }

    render() {
        // Receive results using props, apparently only way to do this. RN has an issue with params and StackNavigator at the moment.
        // It still works as intended, but I was trying to use the modern practice of NavigationActions and creating a NavigationService. 
        const results = this.props.navigation.getParam('results', 'nothing found');
        
        return (
            <View style={styles.container}>
                <Text>
                    This is the Quiz Results Screen
                </Text>
                {
                // Just an example of iterating through the results using map and rendering to the page.
                Object.entries(results).map(([key,v])=>{
                    return <Text key={key}>{key +": value = "+ v}</Text>})
                }
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