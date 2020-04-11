import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Button as CardButton } from "react-native-elements";
import NavigationService from "../components/NavigationService";
import translate from "../components/translateService";
import colors from '../colors';

export default class LearnMoreCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("mainScreen.learnTitle")}
                featuredTitleStyle={styles.title}
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
                    buttonStyle={styles.button}
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