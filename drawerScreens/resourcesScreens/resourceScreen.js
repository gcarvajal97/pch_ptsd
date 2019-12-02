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

class ResourcesScreen extends Component {
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