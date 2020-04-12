import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import translate from "../../components/translateService";
import colors from '../../colors';

import SelfCareCard from "./SelfCareCard";
import RelivingWhat from "./RelivingWhat";
import Avoidance from "./Avoidance";
import AnxiousJumpy from "./AnxiousJumpy";
import SelfCareParents from "./SelfCareParents";

const CONTENT = [
    {
        title: translate("selfCare.content.reExperiencing.title"),
        content: <RelivingWhat />,
        value: 0,
        accessibilityHint: translate(
            "selfCare.content.reExperiencing.accessibility"
        )
    },
    {
        title: translate("selfCare.content.avoidance.title"),
        content: <Avoidance />,
        value: 1,
        accessibilityHint: translate("selfCare.content.avoidance.accessibility")
    },
    {
        title: translate("selfCare.content.hyperArousal.title"),
        content: <AnxiousJumpy />,
        value: 2,
        accessibilityHint: translate(
            "selfCare.content.hyperArousal.accessibility"
        )
    },
    {
        title: translate("selfCare.content.selfCareParents.title"),
        content: <SelfCareParents />,
        value: 3,
        accessibilityHint: translate(
            "selfCare.content.hyperArousal.accessibility"
        )
    }
];

class SelfCare extends Component {
    state = {
        activeSections: [],
        collapse: true,
        multipleSelect: true
    };

    setSections = sections => {
        this.setState({
            activeSections: sections ? sections : []
        });
    };

    renderHeader = (section, _, isActive) => {
        let active;
        CONTENT.forEach(pageLabel => {
            if (pageLabel.title == section.title) {
                active = pageLabel.value;
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
                    {" "}
                    {!this.state.activeSections.includes(active)
                        ? "[+]"
                        : "[-]"}{" "}
                    {section.title}{" "}
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

    static navigationOptions = {
        headerTitle: translate("selfCare.headerTitle")
    };

    render() {
        const { multipleSelect, activeSections } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <SelfCareCard />

                    <View>
                        <Text style={styles.paragraphTitle}>
                            {translate("selfCare.paragraphTitle")}
                        </Text>
                        <Text style={styles.paragraph}>
                            {translate("selfCare.paragraph1")}
                        </Text>
                        <Text style={styles.paragraph}>
                            {translate("selfCare.paragraph2")}
                        </Text>
                        <Text style={styles.paragraphBold}>
                            {translate("selfCare.paragraphBold1")}
                        </Text>
                        <Text style={styles.paragraphBold}>
                            {translate("selfCare.paragraphBold2")}
                        </Text>
                        <Text style={styles.paragraphBold}>
                            {translate("selfCare.paragraphBold3")}
                        </Text>
                        <Text style={styles.paragraph}>
                            {translate("selfCare.paragraph3")}
                        </Text>
                    </View>

                    <Accordion
                        activeSections={activeSections}
                        sections={CONTENT}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        duration={400}
                        onChange={this.setSections}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default SelfCare;

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
        fontFamily: "avenir-heavy"
    },
    paragraph: {
        alignSelf: "center",
        paddingVertical: 0,
        paddingHorizontal: 4,
        fontSize: 14,
        marginTop: 0,
        marginBottom: 4
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
        fontFamily: "avenir-heavy",
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
