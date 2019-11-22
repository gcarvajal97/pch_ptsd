import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

class QuizMain extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Learn More'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Quiz Screen{'\n\n'}
                    1. Some question? Radio buttons below{'\n\n'}
                    2. Some other question. Radio buttons below{'\n\n'}
                </Text>
                <Button>Submit</Button>
            </View>
        );
    }
}
export default QuizMain;

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