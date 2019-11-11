import React, { Component } from 'react';
import { Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';
import Collapsible  from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import NavigationService from '../components/NavigationService';
import WhenToLook from '../outsideHelpScreens/WhenToLook'

// List of screens that will be dispalyed in this list component
const PAGES = [{
        name: 'When to look for outside help',
        content: <WhenToLook /> ,
        accessibilityHint: 'Navigates to When to look for outside help Page'
    },
    {
        name: 'How to look for professional help or counseling for your child',
        navigateTo: '',
        accessibilityHint: 'Navigates to How to look for professional help or counseling for your child Page'
    },
    {
        name: 'When and How to look for more help for yourself',
        navigateTo: '',
        accessibilityHint: 'Navigates to When and How to look for more help for yourself Page'
    }
]

const PAGE_LABELS = [
    {
        title: "When to look for outside help",
        value: 0
    },
    {
        title: "How to look for professional help or counseling for your child",
        value: 1
    },
    {
        title: "When and How to look for more help for yourself",
        value: 2
    },
]

export default class WhenToGetOutsideHelpList extends Component {
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
            <Text style={styles.headerText}>{section.name} {!this.state.activeSections.includes(active) ? "\t[+]" : "\t[-]"}</Text>
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
          <Text style={styles.title}>When To Get Outside Help</Text>

          <View style={styles.selectors}>
            {PAGES.map(selector => (
              <TouchableOpacity
                key={selector.title}
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
        backgroundColor: '#F5FCFF',
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
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
});