import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import translate from "../../components/translateService";

export default class GlossaryScreenCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("glossary.glossary")}
                featuredTitleStyle={styles.imageTitle}
                image={require("../../assets/GlossaryScreen.jpg")}
                accessible
                accessibilityLabel={translate("glossary.accessibilityLabel")}
                accessibilityHint={translate("glossary.accessibilityLabel")}
            >
                <Text
                    style={styles.imageCaption}
                >
                    {translate("glossary.description")}
                </Text>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    imageTitle: {
        fontSize: 44,
        fontWeight: null,
        fontFamily: "avenir-heavy"
    },
    imageCaption: {
        marginVertical: -8,
        fontFamily: "avenir-medium",
        textAlign: "center"
    }
})