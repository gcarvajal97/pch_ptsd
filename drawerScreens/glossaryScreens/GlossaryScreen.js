import React, { Component } from "react";
import { Button, Platform, ScrollView, StyleSheet, View } from "react-native";
import NavigationService from "../../components/NavigationService";
import PchPtsdAccordion from "../../components/shared/PchPtsdAccordion";
import translate from "../../components/translateService";
import GlossaryScreenCard from "./GlossaryScreenCard";
import GlossaryTerms from "./GlossaryTerms";

class GlossaryScreen extends Component {
    static navigationOptions = {
        headerTitle: translate("glossary.glossary"),
        headerTitleContainerStyle: {
            marginLeft:
                Platform.OS === "android" &&
                translate("glossary.back").length > 4
                    ? translate("glossary.back").length + 22
                    : 0
        },
        headerLeftContainerStyle: {
            marginLeft: 5
        },
        headerLeft: (
            <Button
                onPress={() => NavigationService.navigateDrawer("Home")}
                title={translate("glossary.back")}
            ></Button>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <GlossaryScreenCard />
                    <PchPtsdAccordion
                        sections={translate("glossary.accordion")}
                        contentRenderFunction={GlossaryTerms}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default GlossaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    }
});
