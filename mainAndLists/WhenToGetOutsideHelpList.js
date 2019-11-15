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
            <Text style={styles.headerText}>{!this.state.activeSections.includes(active) ? "\t[+]" : "\t[-]"} {section.name}</Text>
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
          <View>
            <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
            <Text style={styles.title}>When To Get Outside Help</Text>
            <Text style={styles.paragraph}>You have the very important job of making 
            sure your child gets the best medical care for his physical injuries.
            You are also the best person to monitor how your child is coping, 
            and when some extra help, such as trauma counseling, might be needed. 
            In the first few days after an injury, many kids (and parents) feel a 
            little upset, jumpy or worried, and can use a little extra support 
            from family and friends.
            </Text>
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
    alignItems: 'center',
    margin: 16,
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
        textAlign: 'center',
        backgroundColor: '#2089DC', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 22, 
        alignSelf: 'stretch'
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
        fontSize:20,
        alignSelf:'stretch',
        textAlign:'left',
        marginLeft:5,
        marginTop:4,
        marginBottom:3,
        color:'#2089DC'
    },
    bullet: {
        marginVertical:1, 
        marginHorizontal:18, 
        textAlign:'left', 
        alignSelf:'stretch', 
        fontWeight:'bold',
        fontSize:14
    },
    paragraph: {
        paddingVertical:1, 
        paddingHorizontal:5,
        flexWrap: 'wrap',
        fontSize: 12,
        marginTop: 5,
    },
    link: {
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 16,
        color:'#2089DC',
        textDecorationLine: 'underline',
        marginTop: 4,
        marginTop: 3,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        alignSelf: 'stretch',
        fontSize: 16,
        fontWeight: '500',
        justifyContent: 'flex-start'
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
      backgroundColor: 'white',
    },
    inactive: {
      backgroundColor: 'white',
    },
    selectors: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
      fontSize: 10,
      fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 10,
        fontWeight: '500',
        padding: 10,
    },
});