import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import NavigationService from '../../components/NavigationService';
import GlossaryScreenCard from './GlossaryScreenCard';
import TypesOfInjury from './TypesOfInjury';
import Anatomy from './Anatomy';
import CommonDrugsTreatments from './CommonDrugsTreatments';
import HealthcareProcedures from './HealthcareProcedures';
import HealthcareStaff from './HealthcareStaff';
import TraumaticStressReactions from './TraumaticStressReactions';

const CONTENT = [
	{
		title: 'Types of Injury',
		content: <TypesOfInjury/>,
		value: 0,
		accessibilityHint: 'Navigates to Types of Injury',
	},
		{
		title: 'Anatomy',
		content: <Anatomy/>,
		value: 1,
		accessibilityHint: 'Navigates to Anatomy',
	},
		{
		title: 'Common Drugs / Treatments',
		content: <CommonDrugsTreatments/>,
		value: 2,
		accessibilityHint: 'Navigates to Common Drugs and Treatments',
	},
		{
		title: 'Healthcare Procedures',
		content: <HealthcareProcedures/>,
		value: 3,
		accessibilityHint: 'Navigates to Healthcare Procedures',
	},
		{
		title: 'Healthcare Staff',
		content: <HealthcareStaff/>,
		value: 4,
		accessibilityHint: 'Navigates to Healthcare Staff',
	},
		{
		title: 'Traumatic Stress Reactions',
		content: <TraumaticStressReactions/>,
		value: 5,
		accessibilityHint: 'Navigates to Traumatic Stress Reactions',
	},
];


class GlossaryScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Glossary',
        headerLeft: (<View style={{ margin: 5 }}><Button
            onPress={()=>NavigationService.navigateDrawer('Home')}
            title='Back'></Button></View>)
    }

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

    render() {

		const { multipleSelect, activeSections } = this.state;

        return (
            
            <View style={styles.container}>
            	<ScrollView>

                    <GlossaryScreenCard/>

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
export default GlossaryScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
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
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'stretch',
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        color: '#2089DC'
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'stretch',
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        color: '#2089DC'
    },
    paragraph: {
        textAlign: 'left',
        fontSize: 14,
        marginVertical: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    paragraphBold: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 2,
        marginLeft: 20,
        marginRight: 20,
    },
        header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'left',
        fontSize: 16,
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
});