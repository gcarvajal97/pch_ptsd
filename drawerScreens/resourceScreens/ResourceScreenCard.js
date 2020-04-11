import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import translate from "../../components/translateService";

export default class ResourceScreenCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("resources.resources")}
                featuredTitleStyle={{ fontSize: 40 }}
                image={require("../../assets/resourcePyramid.png")}
                accessible
                accessibilityLabel={translate("resources.accessibilityHint")}
            >
                <Text
                    style={{
                        marginVertical: -8,
                        fontFamily: 'avenir-heavy',
                        textAlign: "center"
                    }}
                >
                    {translate("resources.description")}
                </Text>
            </Card>
        );
    }
}
