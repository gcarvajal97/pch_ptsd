import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';

import NavigationService from '../components/NavigationService';

// List of screens that will be dispalyed in this list component
const listNames = [
    { name: 'Quick Tips', navigateTo: '', accessibilityHint: ''},
    { name: 'How to Talk with Your Child', navigateTo: '', accessibilityHint: 'Navigates to...'},
    { name: 'How to Deal with New Fears and Worries', navigateTo: '', accessibilityHint: 'Navigates to...'},
    { name: "Working with Your Child's Healthcare Team", navigateTo: '', accessibilityHint: 'Navigates to...'},
    { name: 'Injury and Pain Care', navigateTo: '', accessibilityHint: 'Navigates to...'},
    { name: 'When to Get Outside Help', navigateTo: '', accessibilityHint: 'Navigates to...'},
    { name: "Self Care", navigateTo: '', accessibilityHint: 'Navigates to...'},
]

export default class FindHelpList extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Find Help'
    }
    render() {
        return (
            <View>
                <Card containerStyle={{margin:5}}>
                    <Text style={{textAlign: 'center', backgroundColor:'#2089DC', fontSize:20, color:'white', padding:10, paddingVertical:10, margin:0}}>
                        FIND WAYS TO HELP YOUR CHILD RECOVER
                    </Text>
                    <Divider style={{backgroundColor:'black', height:1, marginBottom:-1}}/>
                    <View>
                        {
                            listNames.map((l, i) => {
                                return (
                                    <ListItem
                                        containerStyle={{paddingLeft:14, paddingVertical:12, paddingRight:0}}
                                        key={i}
                                        title={l.name}
                                        titleStyle={{fontSize:19, alignContent:'stretch', color:'black'}}
                                        onPress={()=>{NavigationService.navigate(l.navigateTo)}}
                                        accessibilityLabel= {l.navigateTo}
                                        accessibilityHint= {l.accessibilityHint}
                                        chevron={{size:32, color: 'black'}}
                                        bottomDivider
                                    />
                                );
                            })
                        }
                    </View>
                </Card>
            </View>
        );
    }
}