import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';

import NavigationService from '../components/NavigationService';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// List of screens that will be dispalyed in this list component
const listNamesEn = [
    { name: 'You Are Not Alone', navigateTo: 'NotAlone', accessibilityHint: 'Navigates to the you are not alone screen'},
    { name: 'Reactions to Injury', navigateTo: 'Reactions', accessibilityHint: 'Navigates to the reactions to injury screen'},
    { name: 'What Are Traumatic Stress Reactions?', navigateTo: 'TraumaticStressReactions', accessibilityHint: 'Navigates to the what are traumatic stress reactions screen'},
    { name: 'How Long Do Traumatic Stress Reactions Last?', navigateTo: 'HowLong', accessibilityHint: 'Navigates to the how long do traumatic stress reactions last screen'},
]

const listNamesEs = [
    { name: 'You Are Not Alone', navigateTo: 'NotAlone', accessibilityHint: 'Navigates to the you are not alone screen'},
    { name: 'Reactions to Injury', navigateTo: 'Reactions', accessibilityHint: 'Navigates to the reactions to injury screen'},
    { name: 'What Are Traumatic Stress Reactions?', navigateTo: 'TraumaticStressReactions', accessibilityHint: 'Navigates to the what are traumatic stress reactions screen'},
    { name: 'How Long Do Traumatic Stress Reactions Last?', navigateTo: 'HowLong', accessibilityHint: 'Navigates to the how long do traumatic stress reactions last screen'},
]

i18n.translations = {
    en: {
        header: 'Learn More',
        title: 'WHAT TO EXPECT AFTER INJURY',
        listNames: listNamesEn
    },
    es: {
        header: 'Aprende más',
        title: 'QUE ESPERAR DESPUÉS DE LESIÓN',
        listNames: listNamesEs
    }
}

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default class LearnMoreList extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: i18n.t('header')
    }
    render() {
        return (
            <View>
                <Card containerStyle={{margin:5}}>
                    <Text style={{textAlign: 'center', backgroundColor:'#2089DC', fontSize:20, color:'white', padding:10, paddingVertical:10, margin:0}}>
                        {i18n.t('title')}
                    </Text>
                    <Divider style={{backgroundColor:'black', height:1, marginBottom:-1}}/>
                    <View>
                        {
                            i18n.t('listNames').map((l, i) => {
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