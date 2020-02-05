import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import translate from "../../components/translateService";

export default class GlossaryScreenCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("glossary.glossary")}
                featuredTitleStyle={{ fontSize: 40 }}
                image={require("../../assets/GlossaryScreen.jpg")}
                accessible
                accessibilityLabel={translate("glossary.accessibilityLabel")}
            >
                <Text
                    style={{
                        marginVertical: -8,
                        fontWeight: "500",
                        textAlign: "center"
                    }}
                >
                    {translate("glossary.description")}
                </Text>
            </Card>
        );
    }
}
