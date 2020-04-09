import React, { Component } from "react";
import { Text } from "react-native";
import { Card, Button as CardButton } from "react-native-elements";
import NavigationService from "../components/NavigationService";
import translate from "../components/translateService";
import colors from '../colors';

export default class FindHelpCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("mainScreen.findHelpTitle")}
                featuredTitleStyle={{
                    textAlign: "center",
                    fontFamily: "avenir-medium",
                    fontStyle: null,
                    fontWeight: null,
                    fontSize: 26
                }}
                image={require("../assets/FindWaysHelp.jpg")}
                accessible
                accessibilityLabel={translate("mainScreen.findHelpAccessLabel")}
            >
                <Text style={{ marginBottom: 10 }}>
                    {translate("mainScreen.findHelpCaption")}
                </Text>
                <CardButton
                    onPress={() => NavigationService.navigate("FindHelp")}
                    testID="FindHelpButton"
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        backgroundColor: colors.accent
                        
                    }}
                    title={translate("mainScreen.findHelpButton")}
                    titleStyle={{ fontFamily: "avenir-medium" }}
                    accessible
                    accessibilityLabel={translate("mainScreen.findHelpButton")}
                    accessibilityHint={translate(
                        "mainScreen.findHelpAccessHint"
                    )}
                />
            </Card>
        );
    }
}
