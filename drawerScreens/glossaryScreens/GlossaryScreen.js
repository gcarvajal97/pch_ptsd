import React, { Component } from "react";
import { Button, Platform, ScrollView, StyleSheet, View } from "react-native";
import NavigationService from "../../components/NavigationService";
import PchPtsdAccordion from "../../components/shared/PchPtsdAccordion";
import translate, { getLocale } from "../../components/translateService";
import GlossaryScreenCard from "./GlossaryScreenCard";
import GlossaryTerms from "./GlossaryTerms";

class GlossaryScreen extends Component {
    marginLeft =
        getLocale().startsWith("es") && Platform.OS === "android"
            ? translate("glossary.back").length + 22
            : 0;
    static navigationOptions = {
        headerTitle: translate("glossary.glossary"),
        headerTitleContainerStyle: {
            marginLeft: this.marginLeft
        },
        headerLeftContainerStyle: {
            marginLeft: 5
        },
        headerLeft: (
            <Button
                onPress={() => NavigationService.navigateDrawer("Home")}
                title={translate("glossary.back")}
                accessible
                accessibilityLabel={translate("glossary.back")}
                accessibilityHint={translate("glossary.backHint")}
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
                        accessible
                        accessibilityLabel={translate("glossary.accordion")}
                        accessibilityHint={translate("glossary.accordion")}
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
