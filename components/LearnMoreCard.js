import React, { Component } from "react";
import { Text } from "react-native";
import { Card, Button as CardButton } from "react-native-elements";
import NavigationService from "./NavigationService";
import translate from "./translateService";

// Card view component to be displayed on the main screen
// We can now use the NavigationService to navigate to screens as seen below (NavigationService.navigate('WhateverScreen'))
export default class LearnMoreCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("mainScreen.learnTitle")}
                featuredTitleStyle={{
                    textAlign: "center",
                    fontFamily: "avenir-medium",
                    fontStyle: null,
                    fontWeight: null
                }}
                image={require("../assets/LearnMoreMD.jpg")}
                accessible
                accessibilityLabel={translate("mainScreen.learnAccessLabel")}
            >
                <Text style={{ marginBottom: 10 }}>
                    {translate("mainScreen.learnCaption")}
                </Text>
                <CardButton
                    onPress={() => NavigationService.navigate("LearnMore")}
                    testID="LearnMoreButton"
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }}
                    title={translate("mainScreen.learnButton")}
                    titleStyle={{ fontFamily: "avenir-medium" }}
                    accessible
                    accessibilityLabel={translate("mainScreen.learnButton")}
                    accessibilityHint={translate("mainScreen.learnAccessHint")}
                />
            </Card>
        );
    }
}
