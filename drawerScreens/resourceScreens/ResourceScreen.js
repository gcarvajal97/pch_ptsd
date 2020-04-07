import React, { Component } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import NavigationService from "../../components/NavigationService";
import translate, { getLocale } from "../../components/translateService";
import ResourceScreenCard from "../resourceScreens/ResourceScreenCard";
import PchPtsdAccordion from "../../components/shared/PchPtsdAccordion";
import Resources from "./Resources";
import colors from "../../colors";

class ResourceScreen extends Component {
    marginLeft =
        getLocale().startsWith("es") && Platform.OS === "android"
            ? translate("resources.back").length + 22
            : 0
    static navigationOptions = {
        headerTitle: translate("resources.resources"),
        headerTitleContainerStyle: {
            marginLeft: this.marginLeft
        },
        headerLeftContainerStyle: {
            marginLeft: 5
        },
        headerLeft: (
            <Button
                onPress={() => NavigationService.navigateDrawer("Home")}
                title={translate("resources.back")}
                titleStyle={{fontFamily:"avenir-medium"}}
                color={colors.accent}
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
                    <ResourceScreenCard />
                    <PchPtsdAccordion
                        sections={translate("resources.accordion")}
                        contentRenderFunction={Resources}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default ResourceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: 10,
        backgroundColor: colors.primary.white,
        shadowColor: colors.primary.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    }
});
