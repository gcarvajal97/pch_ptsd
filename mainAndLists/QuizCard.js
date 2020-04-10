import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Button as CardButton } from "react-native-elements";
import NavigationService from "../components/NavigationService";
import translate from "../components/translateService";
import colors from '../colors';

export default class QuizCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("mainScreen.quizTitle")}
                featuredTitleStyle={styles.title}
                image={require("../assets/QuizRateReactions.jpg")}
                accessible
                accessibilityLabel={translate("mainScreen.quizAccessLabel")}
            >
                <Text style={{ marginBottom: 10 }}>
                    {translate("mainScreen.quizCaption")}
                </Text>
                <CardButton
                    onPress={() => NavigationService.navigate("Quiz")}
                    testID="QuizCardButton"
                    buttonStyle={styles.button}
                    title={translate("mainScreen.quizButton")}
                    titleStyle={{ fontFamily: "avenir-medium" }}
                    accessible
                    accessibilityLabel={translate("mainScreen.quizButton")}
                    accessibilityHint={translate("mainScreen.quizAccessHint")}
                />
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontFamily: "avenir-medium",
        fontStyle: null,
        fontWeight: null,
        fontSize: 26
    },
    button: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: colors.accent
    }
});