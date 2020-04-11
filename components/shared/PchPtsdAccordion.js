import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";

class PchPtsdAccordion extends Component {
    state = {
        sections: [],
        activeSections: []
    };

    constructor(props) {
        super(props);

        this.state.sections = this._initializeSections(
            props.sections,
            props.contentRenderFunction
        );
    }

    _initializeSections(sections, contentRenderFunction) {
        return sections.map(section => {
            return {
                name: section.name,
                accessibilityHint: section.accessibilityHint,
                content: contentRenderFunction(section.content)
            };
        });
    }

    _renderHeader = (section, i, active) => {
        return (
            <Animatable.View
                duration={400}
                transition="backgroundColor"
                style={
                    (styles.header, active ? styles.active : styles.inactive)
                }
            >
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>
                        {active ? "[-]" : "[+]"}
                    </Text>
                    <Text style={styles.headerText}>{section.name}</Text>
                </View>
            </Animatable.View>
        );
    };

    _renderContent = (section, i, active) => {
        return <Animatable.View>{section.content}</Animatable.View>;
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <View>
                <Accordion
                    duration={500}
                    touchableComponent={TouchableOpacity}
                    sections={this.state.sections}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </View>
        );
    }
}

export default PchPtsdAccordion;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#F5FCFF",
        padding: 10
    },
    headerTextContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 10
    },
    headerText: {
        paddingLeft: 5,
        fontSize: 14,
        fontFamily: "avenir-heavy"
    },
    active: {
        backgroundColor: "rgba(255,255,255,1)"
    },
    inactive: {
        backgroundColor: "rgba(245,252,255,1)"
    }
});
