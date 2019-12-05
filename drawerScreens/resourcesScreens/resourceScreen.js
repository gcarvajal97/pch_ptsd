import React, { Component } from 'react';
import { ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { Card } from 'react-native-elements';

import NavigationService from '../../components/NavigationService';

import resourcePyramid from '../../assets/resourcePyramid.png';
import FindATherapistScreen from './FindATherapistGroup';
import MoreInfoGroup from './MoreInfoGroup';

class ResourcesScreen extends Component {

    pages = [
        {
            name: 'For more information on how to find a therapist',
            content: <FindATherapistScreen resetSections={this.resetSections}/>,
            accessibilityHint: 'Navigates to When to look for outside help Page',
            value: 0
        },
        {
            name: 'For more information about traumatic stress and PTSD',
            content: <MoreInfoGroup />,
            accessibilityHint: 'Navigates to How to look for professional help or counseling for your child Page',
            value: 1
        },
        {
            name: 'Information on dealing with other types of traumatic events',
            content: <Text>Test</Text>,
            accessibilityHint: 'Navigates to When and how to look for more help for yourself Page',
            value: 2
        },
        {
            name: 'For help with worry or stress in children and teens',
            content: <Text>Test</Text>,
            accessibilityHint: 'Navigates to When and how to look for more help for yourself Page',
            value: 3
        },
        {
            name: 'For help with sleep problems',
            content: <Text>Test</Text>,
            accessibilityHint: 'Navigates to When and how to look for more help for yourself Page',
            value: 4
        },{
            name: 'For information on injury prevention',
            content: <Text>Test</Text>,
            accessibilityHint: 'Navigates to When and how to look for more help for yourself Page',
            value: 5
        },
        {
            name: 'For more information on pain and injury care',
            content: <Text>Test</Text>,
            accessibilityHint: 'Navigates to When and how to look for more help for yourself Page',
            value: 6
        },
        {
            name: 'BOOKS FOR PARENTS',
            content: <Text>Test</Text>,
            accessibilityHint: 'Navigates to When and how to look for more help for yourself Page',
            value: 7
        },
        {
            name: 'BOOKS FOR KIDS',
            content: <Text>Test</Text>,
            accessibilityHint: 'Navigates to When and how to look for more help for yourself Page',
            value: 8
        }
    ]
    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Additional Resources'
    }

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

    resetSections = () => {
        this.setState({activeSections: []});
    }

    renderHeader = (section, _, isActive) => {
        let active;
        this.pages.forEach((page) => {
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
            <Text style={styles.headerText}>
            {!this.state.activeSections.includes(active) ? "[+]" : "[-]"} {section.name}
            </Text>
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
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
                    <Card image={resourcePyramid} featuredTitleStyle={{ fontSize: 40 }}
                          containerStyle={{ margin: 8 }} featuredTitle='Resources'
                          accessible
                          accessibilityHint='Photo of multi-layered pyramid.'>
                        <Text style={{ margin: -6, textAlign: 'center', fontWeight:'bold' }}>
                        Find additional resources for you and your child.
                        </Text>
                    </Card>
                    <Accordion
                        activeSections={this.state.activeSections}
                        sections={this.pages}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={this.state.multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        onChange={this.setSections}
                    />
                    <Button title='Go Back' onPress={()=>NavigationService.navigateDrawer('Home')} />
            </ScrollView>
        </View>
        );
    }
}

export default ResourcesScreen;

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
          fontSize: 14,
          fontWeight: '500',
      },
      paragraph: {
          alignSelf: 'stretch',
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