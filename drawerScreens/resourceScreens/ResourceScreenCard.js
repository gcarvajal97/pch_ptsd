import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import translate from "../../components/translateService";


export default class ResourceScreenCard extends Component {
    render() {
        return (
            <Card
                featuredTitle={translate("resources.resources")}
                featuredTitleStyle={styles.imageTitle}
                image={require("../../assets/resourcePyramid.png")}
                accessible
                accessibilityLabel={translate("resources.accessibilityHint")}
            >
                <Text
                    style={styles.imageCaption}
                >
                    {translate("resources.description")}
                </Text>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    imageTitle: {
        fontSize: 42,
        fontWeight: null,
        fontFamily: "avenir-heavy"
    },
    imageCaption: {
        marginVertical: -8,
        fontFamily: 'avenir-medium',
    }
})