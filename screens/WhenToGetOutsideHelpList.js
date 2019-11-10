import { React, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Collapsible } from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { Accordion } from 'react-native-collapsible/Accordion';

import NavigationService from '../components/NavigationService';
import WhenToLook from '../outsideHelpScreens/WhenToLook'

// List of screens that will be dispalyed in this list component
const PAGES = [{
        name: 'When to look for outside help',
        content: <WhenToLook /> ,
        accessibilityHint: 'Navigates to When to look for outside help'
    },
    {
        name: 'How to look for professional help or counseling for your child',
        navigateTo: '',
        accessibilityHint: 'Navigates to How to look for professional help or counseling for your child Page'
    },
    {
        name: 'When and How to look for more help for yourself',
        navigateTo: '',
        accessibilityHint: 'Navigates to When and How to look for more help for yourself'
    }
]

const PAGE_LABELS = [{
    title: "When to look for outside help",
    value: 0
}]

export default class WhenToGetOutsideHelpList extends Component {
    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
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
        return (
          <Animatable.View
            duration={400}
            style={[styles.header, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor"
          >
            <Text style={styles.headerText}>{section.title}</Text>
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
            <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
              {section.content}
            </Animatable.Text>
          </Animatable.View>
        );
      }

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Find Help'
    }
    render() {
        const { multipleSelect, ctiveSections } = this.state;

        return ( <WhenToLook /> );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
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
        textAlign: 'center',
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
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});