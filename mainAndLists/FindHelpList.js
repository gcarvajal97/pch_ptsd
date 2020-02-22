import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';
import NavigationService from '../components/NavigationService';
import { translate } from '../components/translateService';

// List of screens that will be displayed in this list component
const listNames = [
    { name: translate('listFindHelp.quickTips'), navigateTo: 'QuickTips', accessibilityHint: translate('listFindHelp.quickTipsHint')},
    { name: translate('listFindHelp.howToTalk'), navigateTo: 'HowToTalk', accessibilityHint: translate('listFindHelp.howToTalkHint')},
    { name: translate('listFindHelp.howToDeal'), navigateTo: 'DealWorries', accessibilityHint: translate('listFindHelp.howToDealHint')},
    { name: translate('listFindHelp.healthcareTeam'), navigateTo: 'HealthTeam', accessibilityHint: translate('listFindHelp.healthcareTeamHint')},
    { name: translate('listFindHelp.injuryPain'), navigateTo: 'InjuryPainCare', accessibilityHint: translate('listFindHelp.injuryPainHint')},
    { name: translate('listFindHelp.outsideHelp'), navigateTo: 'WhenToGetHelp', accessibilityHint: translate('listFindHelp.outsideHelpHint')},
    { name: translate('listFindHelp.selfCare'), navigateTo: 'SelfCare', accessibilityHint: translate('listFindHelp.selfCareHint')},
]

export default class FindHelpList extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: translate('listFindHelp.header')
    }
    render() {
        return (
            <View>
                <Card containerStyle={{margin:5}}>
                    <Text style={{textAlign: 'center', backgroundColor:'#2089DC', fontSize:20, color:'white', padding:10, paddingVertical:10, margin:0}}>
                        {translate('listFindHelp.caption')}
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