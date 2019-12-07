import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import AbdominalTrauma from './AdbominalTraumaScreen';
import HeadInjury from './HeadInjuryScreen';
import InjuryPreventionTips from './InjuryPreventionTipsScreen';
import ManagingPain from './ManagingPainScreen';
import TakingCareCast from './TakingCareofCastScreen';
import UsingCrutches from './UsingCrutchesScreen';
import painCareImg from '../../assets/PainAndInjury.jpg';


// List of screens that will be dispalyed in this list component
const PAGES = [
  { name: 'Injury Prevention Tips', content: <InjuryPreventionTips/>, value: 0, accessibilityHint: '...' },
  { name: 'Abdominal Trauma', content: <AbdominalTrauma/>, value: 1, accessibilityHint: '...' },
  { name: 'Taking Care of Your Child\'s Cast', content: <TakingCareCast/>, value: 2, accessibilityHint: '...' },
  { name: 'Using Crutches', content: <UsingCrutches/>, value: 3, accessibilityHint: '...' },
  { name: 'Head Injury / Concussion', content: <HeadInjury/>, value: 4, accessibilityHint: '...' },
  { name: 'Recognizing and Managing Pain', content: <ManagingPain/>, value: 5, accessibilityHint: '...' }
]

export default class InjuryPainCare extends Component {
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
                    <Card image={painCareImg} featuredTitleStyle={{ fontSize: 40 }}
                        containerStyle={{ margin: 8 }} featuredTitle='Inury and Pain'
                        accessible
                        accessibilityHint='Photo of a a young girl walking on crutches, with a nurse assisting her'
                    >
                        <Text style={{ margin: -6, textAlign: 'center', fontWeight:'bold' }}>Help you and your child overcome an injury. </Text>
                    </Card>
                    <Text style={styles.paragraphTitle}>Injury and Pain Care</Text>
                    <Text style={styles.paragraph}>
                    This section of the app offers some general information about common injuries and tips for 
                    home management, as well as helpful hints for pain management and injury prevention.
                    </Text>
                    <Text style={styles.paragraph}>
                    Remember, your healthcare provider is the best source for information regarding your child's 
                    injury. If you have specific questions or concerns about your child's injury or treatment, please 
                    make sure to talk with your healthcare provider. If any information in this website is different 
                    from what your healthcare provider recommends, follow your healthcare provider's advice.
                    </Text>
                    <Text style={styles.paragraph}>
                    Full recovery goes beyond physical healing - learn more about your child's emotional recovery 
                    after an injury, and how you can help.
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