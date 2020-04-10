import React, { Component } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import { Card } from "react-native-elements";
import { translate } from "../../components/translateService";

import whenToGetHelpImage from "../../assets/whenToGetHelp.jpg";
import WhenToLook from "./WhenToLook";
import HowToLook from "./HowToLook";
import WhenAndHowToLookForYourself from "./WhenAndHowToLookForYourself";
import colors from '../../colors';

// List of screens that will be dispalyed in this list component
const PAGES = [
    {
        name: translate("whenToGetOutsideHelp.page1"),
        content: <WhenToLook />,
        accessibilityHint: translate("whenToGetOutsideHelp.page1Accessability"),
        value: 0
    },
    {
        name: translate("whenToGetOutsideHelp.page2"),
        content: <HowToLook />,
        accessibilityHint: translate("whenToGetOutsideHelp.page2Accessability"),
        value: 1
    },
    {
        name: translate("whenToGetOutsideHelp.page3"),
        content: <WhenAndHowToLookForYourself />,
        accessibilityHint: translate("whenToGetOutsideHelp.page3Accessability"),
        value: 2
    }
];

export default class WhenToGetOutsideHelpScreen extends Component {
    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: true
    };

    setSections = sections => {
        this.setState({
            activeSections: sections ? sections : []
        });
    };

    renderHeader = (section, _, isActive) => {
        let active;
        PAGES.forEach(page => {
            if (page.name == section.name) {
                active = page.value;
            }
        });
        return (
            <Animatable.View
                duration={400}
                style={[
                    styles.header,
                    isActive ? styles.active : styles.inactive
                ]}
                transition="backgroundColor"
            >
                <Text style={styles.headerText}>
                    {!this.state.activeSections.includes(active)
                        ? "[+]"
                        : "[-]"}{" "}
                    {section.name}
                </Text>
            </Animatable.View>
        );
    };

    renderContent(section, _, isActive) {
        return (
            <Animatable.View
                duration={400}
                style={[
                    styles.content,
                    isActive ? styles.active : styles.inactive
                ]}
                transition="backgroundColor"
            >
                {section.content}
            </Animatable.View>
        );
    }

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: translate("whenToGetOutsideHelp.headerTitle")
    };
    render() {
        const { multipleSelect, activeSections } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
                    <Card
                        image={whenToGetHelpImage}
                        featuredTitleStyle={{ fontSize: 40, fontFamily: "avenir-medium"}}
                        containerStyle={{ margin: 8 }}
                        featuredTitle={translate(
                            "whenToGetOutsideHelp.featuredTitle"
                        )}
                        accessible
                        accessibilityHint={translate(
                            "whenToGetOutsideHelp.cardAccessibilityHint"
                        )}
                    >
                        <Text
                            style={{
                                margin: -6,
                                textAlign: "center",
                                fontFamily: "avenir-heavy"
                            }}
                        >
                            {translate("whenToGetOutsideHelp.subTitle")}
                        </Text>
                    </Card>
                    <Text style={styles.paragraphTitle}>
                        {translate("whenToGetOutsideHelp.paragraphTitle")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("whenToGetOutsideHelp.paragraph")}
                    </Text>

                    <Accordion
                        activeSections={activeSections}
                        sections={PAGES}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        onChange={this.setSections}
                    />
                </ScrollView>
            </View>
        );
    }
}

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
    },
    title: {
        backgroundColor: colors.accent,
        color: colors.primary.white,
        fontFamily: "avenir-heavy",
        fontSize: 22,
        textAlign: "center",
        alignSelf: "stretch"
    },
    header: {
        backgroundColor: colors.primary.white,
        padding: 10
    },
    headerText: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "avenir-medium",
    },
    paragraph: {
        alignSelf: "center",
        paddingVertical: 0,
        paddingHorizontal: 4,
        fontSize: 14,
        marginTop: 0,
        marginBottom: 4,
        fontFamily: "avenir-medium",
    },
    content: {
        padding: 20,
        backgroundColor: colors.primary.white
    },
    active: {
        backgroundColor: colors.primary.white
    },
    inactive: {
        backgroundColor: colors.primary.white
    },
    selectors: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    selector: {
        backgroundColor: colors.primary.white,
        padding: 10
    },
    activeSelector: {
        fontFamily: "avenir-heavy"
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "avenir-medium",
        padding: 10
    },
    subTitle: {
        backgroundColor: colors.accent,
        color: colors.primary.white,
        alignSelf: "stretch",
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 15,
        borderBottomWidth: 2,
        borderBottomColor: colors.accent
    },
    paragraphTitle: {
        fontFamily: "avenir-heavy",
        fontSize: 22,
        alignSelf: "stretch",
        textAlign: "left",
        marginTop: 3,
        marginBottom: 2,
        color: colors.accent,
        paddingLeft: 4,
        paddingRight: 1
    }
});
