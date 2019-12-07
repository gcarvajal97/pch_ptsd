import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import SelfCareCard from './SelfCareCard';
import RelivingWhat from './RelivingWhat';
import Avoidance from './Avoidance';
import AnxiousJumpy from './AnxiousJumpy';
import SelfCareParents from './SelfCareParents';

const CONTENT = [
    {
        title: 'Re-Experiencing: Reliving what happened',
        content: <RelivingWhat/>,
        value: 0,
        accessibilityHint: 'Navigates to Re-Experiencing: Reliving what happened',
    },
        {
        title: 'Avoidance: Staying away from reminders',
        content: <Avoidance/>,
        value: 1,
        accessibilityHint: 'Navigates to Avoidance: Staying away from reminders',
    },
        {
        title: 'Hyper-Arousal: Feeling anxious or jumpy',
        content: <AnxiousJumpy/>,
        value: 2,
        accessibilityHint: 'Navigates to Hyper-Arousal: Feeling anxious or jumpy',
    },
        {
        title: 'Self-Care for Parents',
        content: <SelfCareParents/>,
        value: 3,
        accessibilityHint: 'Navigates to Self-Care for Parents',
    },
];

class SelfCare extends Component {

    state = {
        activeSections: [],
        collapse: true,
        multipleSelect: true,
    };

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section, _, isActive) => {
        let active;
        CONTENT.forEach((pageLabel) => {
            if (pageLabel.title == section.title) {
                active = pageLabel.value
            }
        })
        return (
            <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                <Text style={styles.headerText}> {!this.state.activeSections.includes(active) ? "[+]\t" : "[-]\t"} {section.title} </Text>
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

    static navigationOptions = {
        headerTitle: 'Find Help'
    }

  render() {

    const { multipleSelect, activeSections } = this.state;

    return (
        <View style={styles.container}>
            <ScrollView>
            <SelfCareCard/>
        
            <View>
                <Text style={styles.paragraphTitle}>In addition to all the things you do to help your child, it's very important to take good care of yourself.</Text>
                <Text style={styles.paragraph}>It is harder to help your child if you are feeling really worried, upset, or overwhelmed.</Text>
                <Text style={styles.paragraph}>Other parents have said: </Text>
                <Text style={styles.paragraphBold}>"I can't stop thinking about what happened."</Text>
                <Text style={styles.paragraphBold}>"I get upset when something reminds me of it."</Text>
                <Text style={styles.paragraphBold}>"I worry a lot more now about my child being safe."</Text>
                <Text style={styles.paragraph}> This section has information on some of the reactions you may notice in yourself:</Text>  
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