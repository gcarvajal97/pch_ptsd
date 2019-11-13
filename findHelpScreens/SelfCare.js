import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const BACON = 'Blah, blah, blah...'

const CONTENT = [
    {
        title: 'Re-Experiencing: Reliving what happened',
        content: BACON,
        value: 0,
        accessibilityHint: 'Navigates to Re-Experiencing: Reliving what happened',
    },
        {
        title: 'Avoidance: Staying away from reminders',
        content: BACON,
        value: 1,
        accessibilityHint: 'Navigates to Avoidance: Staying away from reminders',
    },
        {
        title: 'Hyper-Arousal: Feeling anxious or jumpy',
        content: BACON,
        value: 2,
        accessibilityHint: 'Navigates to Hyper-Arousal: Feeling anxious or jumpy',
    },
        {
        title: 'Self-Care for Parents',
        content: BACON,
        value: 3,
        accessibilityHint: 'Navigates to Self-Care for Parents',
    },
];

class SelfCare extends Component {

    state = {
        activeSections: [],
        collapse: true,
        multipleSelect: false,
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
          <Animatable.View
            duration={400}
            style={[styles.header, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor"
          >
            <Text></Text>
            <Text style={styles.headerText}> {!this.state.activeSections.includes(active) ? "[+]\t" : "[-]\t"} {section.title}</Text>
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

    static navigationOptions = {
        headerTitle: 'Find Help'
    }

  render() {

    const { multipleSelect, activeSections } = this.state;

    return (
        <View style={styles.container}>
            <Text style={{ backgroundColor: 'white', color: '#2089DC', fontWeight: 'bold', fontSize: 22, textAlign: 'center', alignSelf: 'stretch' }}>
                Self Care
            </Text>
            <Image
                source={require('../assets/SelfCare.jpg')}
                style={{ height: 204, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 0, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                accessibilityLabel="Photo of worried mother on phone."
                accessibilityHint="Photo of worried mother on phone."
            />
        
        <ScrollView>
            <Text style={{fontWeight: 'bold', fontSize:20, alignSelf:'stretch', textAlign:'left', marginLeft:5, marginTop:4, marginBottom:0, color:'#2089DC'}}>
                In addition to all the things you do to help your child, it's very important to take good care of yourself.
            </Text>
            <Text style={styles.paragraph}>
                It is harder to help your child if you are feeling really worried, upset, or overwhelmed. {"\n"}
                Other parents have said:
            </Text>
            <Text style={styles.bullet}>"I can't stop thinking about what happened."</Text>
            <Text style={styles.bullet}>"I get upset when something reminds me of it."</Text>
            <Text style={styles.bullet}>"I worry a lot more now about my child being safe."</Text>
            <Text style={styles.paragraph}>
                {"\n"}This section has information on some of the reactions you may notice in yourself:
            </Text>  

            <Collapsible collapsed={this.state.collapsed} align="center">
                <View style={styles.content}>
                    <Text>
                        Bacon
                    </Text>
                </View>
            </Collapsible>

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
    bullet: {
        marginVertical:1, 
        marginHorizontal:18, 
        textAlign:'left', 
        alignSelf:'stretch', 
        fontStyle:'italic',
        fontSize:14,
        paddingTop: 4,
    },
    paragraph: {
        alignSelf:"stretch", 
        textAlign:'left',
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 14,
        marginTop: 5,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'bold',
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