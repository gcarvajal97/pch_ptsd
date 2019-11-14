
import React, { Component } from 'react';
import { Switch, ScrollView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';
import Collapsible  from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import NavigationService from '../../components/StackNavigator';
import InjuryPainCareCard from './InjuryPainCareCard';
import AbdominalTrauma from './AdbominalTraumaScreen';
import HeadInjury from './HeadInjuryScreen';
import InjuryPreventionTips from './InjuryPreventionTipsScreen';
import ManagingPain from './ManagingPainScreen';
import TakingCareCast from './TakingCareofCastScreen';
import UsingCrutches from './UsingCrutchesScreen';

// List of screens that will be dispalyed in this list component
const PAGES = [
  { name: 'Injury Prevention Tips', content: <InjuryPreventionTips/> , accessibilityHint: '...' },
  { name: 'Abdominal Trauma', content: <AbdominalTrauma/> , accessibilityHint: '...' },
  { name: 'Taking Care of Your Child\'s Cast', content: <TakingCareCast/> , accessibilityHint: '...' },
  { name: 'Using Crutches', content: <UsingCrutches/> , accessibilityHint: '...' },
  { name: 'Head Injury / Concussion', content: <HeadInjury/> , accessibilityHint: '...' },
  { name: 'Recognizing and Managing Pain', content: <ManagingPain/> , accessibilityHint: '...' }
]

const PAGE_LABELS = [
  { title: 'Injury Prevention Tips', value: 0 },
  { title: 'Abdominal Trauma', value: 1 },
  { title: 'Taking Care of Your Child\'s Cast', value: 2 },
  { title: 'Using Crutches', value: 3 },
  { title: 'Head Injury / Concussion', value: 4 },
  { title: 'Recognizing and Managing Pain', value: 5 },
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
        PAGE_LABELS.forEach((pageLabel) => {
            if (pageLabel.title == section.name) {
                active = pageLabel.value
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
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <InjuryPainCareCard/>
            <Text style={styles.paragraph}>
              This section of the website offers some general information about common injuries and tips for 
              home management, as well as helpful hints for pain management and injury prevention.

              Remember, your healthcare provider is the best source for information regarding your child's 
              injury. If you have specific questions or concerns about your child's injury or treatment, please 
              make sure to talk with your healthcare provider. If any information in this website is different 
              from what your healthcare provider recommends, follow your healthcare provider's advice.

              Full recovery goes beyond physical healing - learn more about your child's emotional recovery 
              after an injury, and how you can help.
            </Text>
          <View style={styles.selectors}>
            {PAGES.map(selector => (
              <TouchableOpacity
                key={selector.paragraphTitle}
                onPress={() => this.setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                  >
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

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
        alignSelf:'center', 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize:14,
        marginTop:5,
        marginBottom:5,
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
        paddingRight:15, 
        fontSize: 15, 
        borderBottomWidth:2, 
        borderBottomColor:'#2089DC',
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize:25,
        alignSelf:'stretch',
        textAlign:'center',
        marginTop:4,
        marginBottom:3,
        color:'#2089DC'
    },
});