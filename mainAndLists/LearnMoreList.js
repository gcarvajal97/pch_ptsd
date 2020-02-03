import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';
import NavigationService from '../components/NavigationService';
import translate from '../components/translateService';
<<<<<<< HEAD
=======

// List of screens that will be displayed in this list component and their titles.
const listNames = [
    { name: translate('listLearnMore.notAlone'), navigateTo: 'NotAlone', accessibilityHint: translate('listLearnMore.notAloneHint')},
    { name: translate('listLearnMore.reactions'), navigateTo: 'Reactions', accessibilityHint: translate('listLearnMore.reactionsHint')},
    { name: translate('listLearnMore.stressReactions'), navigateTo: 'TraumaticStressReactions', accessibilityHint: translate('listLearnMore.stressReactionsHint')},
    { name: translate('listLearnMore.howLong'), navigateTo: 'HowLong', accessibilityHint: translate('listLearnMore.howLongHint')},
]
>>>>>>> cee48697c2d1bf7f32974783e959c3b9b9bf51f6

export default class LearnMoreList extends Component {
    /**
     * List component that renders the views and links to various aspects 
     * of the Learn More About Injury section of the application
     */

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
<<<<<<< HEAD
        headerTitle: translate('learnMoreList.header')
=======
        headerTitle: translate('listLearnMore.header')
>>>>>>> cee48697c2d1bf7f32974783e959c3b9b9bf51f6
    }
    render() {
        return (
            <View>
                <Card containerStyle={{margin:5}}>
                    <Text style={{textAlign: 'center', backgroundColor:'#2089DC', fontSize:20, color:'white', padding:10, paddingVertical:10, margin:0}}>
<<<<<<< HEAD
                        {translate('learnMoreList.title')}
=======
                        {translate('listLearnMore.whatToExpect')}
>>>>>>> cee48697c2d1bf7f32974783e959c3b9b9bf51f6
                    </Text>
                    <Divider style={{backgroundColor:'black', height:1, marginBottom:-1}}/>
                    <View>
                        {
                            translate('learnMoreList.listNames').map((l, i) => {
                                return (
                                    <ListItem
                                        containerStyle={{paddingLeft:14, paddingVertical:12, paddingRight:0}}
                                        key={i}
                                        title={l.name}
                                        titleStyle={{fontSize:19, alignContent:'stretch', color:'black'}}
                                        onPress={()=>{NavigationService.navigate(l.navigateTo)}}
                                        accessible
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