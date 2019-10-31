import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';

import NavigationService from '../components/NavigationService';

// List of screens that will be dispalyed in this list component
const listNames = [
    { name: 'You Are Not Alone', navigateTo: 'NotAlone' },
    { name: 'Reactions to Injury', navigateTo: 'Reactions'},
    { name: 'What Are Traumatic Stress Reactions?', navigateTo: 'TSReactions'},
    { name: 'How Long Do Traumatic Stress Reactions Last?'},
]

export default class LearnMoreList extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Learn More'
    }
    render() {
        return (
            <View>
                <Card containerStyle={{margin:5}}>
                    <Text style={{textAlign: 'center', backgroundColor:'#2089DC', fontSize:20, color:'white', padding:10, paddingVertical:10, margin:0}}>
                        WHAT TO EXPECT AFTER INJURY
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