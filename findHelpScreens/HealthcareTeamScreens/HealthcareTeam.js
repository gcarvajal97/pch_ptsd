import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import IntheED from './InTheED';
import InTheHospital from '././InTheHospital';
import AfterTheHospital from '././AfterTheHospital';
import healthTeam from '../../assets/healthTeam.jpg';


// List of screens that will be dispalyed in this list component
const PAGES = [
    { name: 'In the Emergency Department', content: <IntheED />, value: 0, accessibilityHint: 'Navigate to In the Emergency Department' },
    { name: 'In the Hospital', content: <InTheHospital />, value: 1, accessibilityHint: 'Navigate to In the Hospital'},
    { name: 'After the Hospital', content: <AfterTheHospital />, value: 2, accessibilityHint: 'Navigate to After the Hospital' },
]

export default class HealthcareTeam extends Component {
    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: true,
    };

    toggleExpanded = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section, _, isActive) => {
        let active;
        PAGES.forEach((page) => {
            if (page.name == section.name) {
                active = page.value
            }
        })

        return (
            <Animatable.View
                duration={400}
                style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <Text style={styles.headerText}>{!this.state.activeSections.includes(active) ? "[+]" : "[-]"} {section.name}</Text>
            </Animatable.View>
        );
    };

    renderContent(section, _, isActive) {
        return (
            <Animatable.View
                duration={400}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                {section.content}
            </Animatable.View>
        );
    }

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Find Help'
    }
    render() {
        const { multipleSelect, activeSections } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
                    <Card image={healthTeam} featuredTitleStyle={{ fontSize: 40 }}
                        containerStyle={{ margin: 8 }} featuredTitle='Teamwork'
                        accessible
                        accessibilityHint='Photo of a doctor going over an x-ray with a man'
                    >
                        <Text style={{ margin: -6, textAlign: 'center', fontWeight:'bold' }}>It is important to work as a team.</Text>
                    </Card>
                    <Text style={styles.paragraphTitle}>How To Work With Your Child's Healthcare Team</Text>
                    <Text style={styles.paragraph}>
                        You have the very important job of making sure your child gets the best medical care for their physical injuries.
                        You are also the best person to monitor how your child is coping, and when some extra help might be needed.
            </Text>
                    <Text style={styles.paragraph}>
                        In the first few days after an injury, many kids (and parents) feel a little upset, jumpy or worried,
                        and can use a little extra support from family and friends.
            </Text>
                    <Accordion
                        activeSections={activeSections}
                        sections={PAGES}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        onChange={this.setSections}
                        accessible
                        accessibilityHint={activeSections.accessibilityHint}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    title: {
        backgroundColor: '#2089DC',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        alignSelf: 'stretch'
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
    },
    paragraph: {
        alignSelf: 'center',
        paddingVertical: 0,
        paddingHorizontal: 4,
        fontSize: 14,
        marginTop: 0,
        marginBottom: 4,
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    subTitle: {
        backgroundColor: '#2089DC',
        color: 'white',
        alignSelf: 'stretch',
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#2089DC',
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'stretch',
        textAlign: 'left',
        marginTop: 3,
        marginBottom: 2,
        color: '#2089DC',
        paddingLeft: 4,
        paddingRight: 1
    },
});