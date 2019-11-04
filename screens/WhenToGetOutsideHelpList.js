import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';

import NavigationService from '../components/NavigationService';

// List of screens that will be dispalyed in this list component
const listNames = [
    { 
        name: 'When to look for outside help', 
        navigateTo: '', 
        accessibilityHint: 'Navigates to When to look for outside help'
    },
    { 
        name: 'How to loof for professional help or counseling for your child', 
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
        return (
            <View>
                <Card containerStyle={{margin:5}}>
                    <Text style={{textAlign: 'center', backgroundColor:'#2089DC', fontSize:20, color:'white', padding:10, paddingVertical:10, margin:0}}>
                        WHEN TO GET OUTSIDE HELP
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