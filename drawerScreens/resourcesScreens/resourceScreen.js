import React, { Component } from "react";
import {
    Platform,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import { Card } from "react-native-elements";
import resourcePyramid from "../../assets/resourcePyramid.png";
import NavigationService from "../../components/NavigationService";
import translate from "../../components/translateService";
import BooksForKidsScreen from "./BooksForKids";
import BooksForParentsScreen from "./BooksForParents";
import FindATherapistScreen from "./FindATherapistGroup";
import InjuryPreventionScreen from "./InjuryPreventionHelp";
import MoreInfoGroup from "./MoreInfoGroup";
import OtherTypesOfTraumaScreen from "./OtherTypesOfTrauma";
import PainAndInjuryCareScreen from "./PainAndInjuryCareHelp";
import SleepHelpScreen from "./SleepHelp";
import WorryAndStressScreen from "./WorryOrStressHelp";

const PAGES = [
    {
        name: "For more information on how to find a therapist",
        content: <FindATherapistScreen />,
        accessibilityHint: "Navigates to FindATherapist",
        value: 0
    },
    {
        name: "For more information about traumatic stress and PTSD",
        content: <MoreInfoGroup />,
        accessibilityHint: "Navigates to MoreInfo",
        value: 1
    },
    {
        name:
            "For more information on dealing with other types of traumatic events",
        content: <OtherTypesOfTraumaScreen />,
        accessibilityHint: "Navigates to OtherTypesOfTrauma",
        value: 2
    },
    {
        name: "For help with worry or stress in children and teens",
        content: <WorryAndStressScreen />,
        accessibilityHint: "Navigates to WorryAndStress",
        value: 3
    },
    {
        name: "For help with sleep problems",
        content: <SleepHelpScreen />,
        accessibilityHint: "Navigates to sleep problems",
        value: 4
    },
    {
        name: "For information on injury prevention",
        content: <InjuryPreventionScreen />,
        accessibilityHint: "Navigates to injury prevention",
        value: 5
    },
    {
        name: "For more information on pain and injury care",
        content: <PainAndInjuryCareScreen />,
        accessibilityHint: "Navigates to pain and injury care",
        value: 6
    },
    {
        name: "Books For Parents",
        content: <BooksForParentsScreen />,
        accessibilityHint: "Navigates to Books For Parents",
        value: 7
    },
    {
        name: "Books For Kids",
        content: <BooksForKidsScreen />,
        accessibilityHint: "Navigates to Books For Kids",
        value: 8
    }
];

class ResourcesScreen extends Component {
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

    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: true
    };

    toggleExpanded = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections
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

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
                    <Card
                        image={resourcePyramid}
                        featuredTitleStyle={{ fontSize: 40 }}
                        containerStyle={{ margin: 8 }}
                        featuredTitle={translate("resources.resources")}
                        accessible
                        accessibilityHint={translate(
                            "resources.accessibilityHint"
                        )}
                    >
                        <Text
                            style={{
                                margin: -6,
                                textAlign: "center",
                                fontWeight: "bold"
                            }}
                        >
                            {translate("resources.description")}
                        </Text>
                    </Card>
                    <Accordion
                        activeSections={this.state.activeSections}
                        sections={PAGES}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={this.state.multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        onChange={this.setSections}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default ResourcesScreen;

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
    },
    title: {
        backgroundColor: "#2089DC",
        color: "white",
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
        alignSelf: "stretch"
    },
    header: {
        backgroundColor: "#F5FCFF",
        padding: 10
    },
    headerText: {
        fontSize: 14,
        fontWeight: "500"
    },
    paragraph: {
        alignSelf: "stretch",
        paddingVertical: 0,
        paddingHorizontal: 4,
        fontSize: 14,
        marginTop: 0,
        marginBottom: 4
    },
    content: {
        padding: 20,
        backgroundColor: "#fff"
    },
    active: {
        backgroundColor: "rgba(255,255,255,1)"
    },
    inactive: {
        backgroundColor: "rgba(245,252,255,1)"
    },
    selectors: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    selector: {
        backgroundColor: "#F5FCFF",
        padding: 10
    },
    activeSelector: {
        fontWeight: "bold"
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: "500",
        padding: 10
    },
    subTitle: {
        backgroundColor: "#2089DC",
        color: "white",
        alignSelf: "stretch",
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#2089DC"
    },
    paragraphTitle: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "stretch",
        textAlign: "left",
        marginTop: 3,
        marginBottom: 2,
        color: "#2089DC",
        paddingLeft: 4,
        paddingRight: 1
    }
});
