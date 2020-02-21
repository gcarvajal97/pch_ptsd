import React, { Component } from "react";
import {Button, Platform, ScrollView, StyleSheet, View} from "react-native";
import NavigationService from "../../components/NavigationService";
import translate from "../../components/translateService";
import ResourceScreenCard from "../resourceScreens/ResourceScreenCard";
import PchPtsdAccordion from "../../components/shared/PchPtsdAccordion";
import Resources from "./Resources";

class ResourceScreen extends Component {
    static navigationOptions = {
        headerTitle: translate("resources.resources"),
        headerTitleContainerStyle: {
            marginLeft:
                Platform.OS === "android" &&
                translate("resources.back").length > 4
                    ? translate("resources.back").length + 22
                    : 0
        },
        headerLeftContainerStyle: {
            marginLeft: 5
        },
        headerLeft: (
            <Button
                onPress={() => NavigationService.navigateDrawer("Home")}
                title={translate("resources.back")}
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
