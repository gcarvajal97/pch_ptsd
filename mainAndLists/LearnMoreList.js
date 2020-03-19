import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';
import NavigationService from '../components/NavigationService';
import translate from '../components/translateService';
import colors from '../colors';

const listNames = [
    { name: translate('listLearnMore.notAlone'), navigateTo: 'NotAlone', accessibilityHint: translate('listLearnMore.notAloneHint')},
    { name: translate('listLearnMore.reactions'), navigateTo: 'Reactions', accessibilityHint: translate('listLearnMore.reactionsHint')},
    { name: translate('listLearnMore.stressReactions'), navigateTo: 'TraumaticStressReactions', accessibilityHint: translate('listLearnMore.stressReactionsHint')},
    { name: translate('listLearnMore.howLong'), navigateTo: 'HowLong', accessibilityHint: translate('listLearnMore.howLongHint')},
]

export default class LearnMoreList extends Component {

    static navigationOptions = {
        headerTitle: translate('listLearnMore.header')
    }
    render() {
        return (
            <View>
                <Card containerStyle={{margin:5}}>
                    <Text style={{textAlign: 'center', backgroundColor: colors.secondary.pms_3005, fontSize:20, color: colors.primary.white, padding:10, paddingVertical:10, margin:0}}>
                        {translate('listLearnMore.whatToExpect')}
                    </Text>
                    <Divider style={{backgroundColor: colors.primary.black, height:1, marginBottom:-1}}/>
                    <View>
                        {
                            listNames.map((l, i) => {
                                return (
                                    <ListItem
                                        containerStyle={{paddingLeft:14, paddingVertical:12, paddingRight:0}}
                                        key={i}
                                        title={l.name}
                                        titleStyle={{fontSize:19, alignContent:'stretch', color: colors.primary.black}}
                                        onPress={()=>{NavigationService.navigate(l.navigateTo)}}
                                        accessible
                                        accessibilityLabel= {l.navigateTo}
                                        accessibilityHint= {l.accessibilityHint}
                                        chevron={{size:32, color: colors.primary.black}}
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