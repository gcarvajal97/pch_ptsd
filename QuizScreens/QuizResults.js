import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";
import { Card } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import translate from '../components/translateService';

export default class QuizResults extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Take the Quiz'
    }

    render() {
        // Receive results using props, apparently only way to do this. RN has an issue with params and StackNavigator at the moment.
        // It still works as intended, but I was trying to use the modern practice of NavigationActions and creating a NavigationService. 
        const results = this.props.navigation.getParam('results', 'nothing found');
        var count = 0;

        // Checks if the user filled out any reponses
        Object.entries(results).map(([key,v])=>{
            if (v <= 1) {
                count++
            }
        })

        // If they did not fill out responses, it displays a message
        if (count === 0) {
            return (
                <View style={styles.blankContainer}>
                    <Text style={styles.noResponse} accessible> {translate('quizResults.noAnswers')} </Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        {
                            // If they did fill out responses, it displays the correct cards
                            Object.entries(results).map(([key,v])=>{
                                if (v <= 1 && v >= 0) {
                                    return <Card key={key} 
                                    title={translate('quizResults.q' + key + 'title')} 
                                    titleStyle={{color:'#2089DC'}}
                                    accessible>
                                        <Text style={styles.paragraphBold}> {translate('quizResults.whyHappens')} </Text>
                                        <Text style={styles.paragraph}> {translate('quizResults.q' + key + 'body1')} </Text>
                                        <Text style={styles.paragraphBold}> {translate('quizResults.isProblem')} </Text>
                                        <Text style={styles.paragraph}> {translate('quizResults.q' + key + 'body2')} </Text>
                                    </Card>
                                }
                            })
                        }
                    </ScrollView>
                </View>
            );
        }
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
    blankContainer: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        margin: 10,
        marginVertical: 20,
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
    paragraphBold: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    title: {
        backgroundColor: '#2089DC', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 22, 
        textAlign: 'center', 
        alignSelf: 'stretch'
    },
    noResponse: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold', 
        fontSize: 20,
        color: '#2089DC', 
        textAlign: 'center', 
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        marginTop: -10,
    },
});