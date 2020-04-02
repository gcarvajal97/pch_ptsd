import React, { Component } from "react";
import { Text } from "react-native";
import { Card, Button as CardButton } from "react-native-elements";
import NavigationService from "../components/NavigationService";
import translate from "./translateService";

// Card view component: to be displayed on the main screen
export default class QuizCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("mainScreen.quizTitle")}
                featuredTitleStyle={{
                    fontFamily: "avenir-medium",
                    fontStyle: null,
                    fontWeight: null
                }}
                image={require("../assets/QuizRateReactions.jpg")}
                accessible
                accessibilityLabel={translate("mainScreen.quizAccessLabel")}
            >
                <Text style={{ marginBottom: 10 }}>
                    {translate("mainScreen.quizCaption")}
                </Text>
                <CardButton
                    onPress={() => NavigationService.navigate("Quiz")}
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }}
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
