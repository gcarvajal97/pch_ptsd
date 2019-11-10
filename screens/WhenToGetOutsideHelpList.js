import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NavigationService from '../components/NavigationService';
import WhenToLook from '../outsideHelpScreens/WhenToLook'

// List of screens that will be dispalyed in this list component
const listNames = [
    { 
        name: 'When to look for outside help', 
        navigateTo: '', 
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

export default class WhenToGetOutsideHelpList extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Find Help'
    }
    render() {
        return (<WhenToLook/>);
    }
}

const styles = StyleSheet.create({
    button: { 
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0 
    },
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#FFF",
        borderRadius: 5
      },
      collapsibleItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#CCC",
        padding: 10
      }
})