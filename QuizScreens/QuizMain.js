import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import NavigationService from "../components/NavigationService";


class QuizMain extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Take the Quiz'
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.paragraphTitle}>Rate Your Child's Reactions</Text>
                    <Text style={styles.paragraph}>You can rate these on your own (based on what you have noticed with your child). If possible, it may
                     even be better to involve your child in rating their own reactions with you.
                    </Text>
                    <Text style={styles.paragraph}>
                        Re-experiencing: Reliving what happened{'\n\n'}
                        1. Thinks a lot about what happened to him/her{'\n'}
                        2. Has bad dreams or nightmares since the injury{'\n'}
                        3. Gets upset or has physical reactions (headache, stomachache, heart pounding) at reminders of what happened{'\n\n'}
                        Avoidance: Staying away from reminders{'\n\n'}
                        4. Doesn’t want to talk about what happened or tries to push it out of his / her mind{'\n'}
                        5. Wants to stay away from people, places, or things that are reminders of what happened{'\n'}
                        6. Afraid of something that s/he was not afraid of before (or a previous fear or worry seems to get worse){'\n'}
                        7. Not interested in usual activities, since the injury{'\n'}
                        8. Not interested in being with people s/he usually likes, since the injury{'\n\n'}
                        Hyper-arousal: Feeling anxious or jumpy{'\n\n'}
                        9. Worries a lot that something else bad will happen{'\n'}
                        10. Startles easily – for example, jumps if there is a sudden noise{'\n'}
                        11. Seems irritable or has angry outbursts, since the injury{'\n'}
                        12. Has trouble paying attention to things, since the injury{'\n'}
                        13. Has trouble falling or staying asleep, since the injury{'\n\n'}
                        Other concerns about your child{'\n\n'}
                        14. Is still having pain or discomfort.{'\n'}
                        15. Has had other behavior changes since the injury{'\n'}
                        16. Is having trouble with returning to school or other activities{'\n\n'}
                        Concerns about how others in the family are coping{'\n\n'}
                        17. Brothers or sisters are upset or worried.{'\n'}
                        18. You (parent) are stressed or worried yourself{'\n'}
                    </Text>
                    <Button onPress={() => { NavigationService.navigate('QuizResults', { 'results': results })}} title='Submit' raised containerStyle={{marginHorizontal:120, marginBottom:10}}></Button>
                </ScrollView>
            </View>
        );
    }
}
export default QuizMain;

const results = {1: 'Always', 2: 'Sometimes', 3: 'Never', 4: 'Always', 5: 'Sometimes', 6: 'Never',
6: 'Always', 7: 'Sometimes', 8: 'Never', 9: 'Always', 10: 'Sometimes', 11: 'Never',
12: 'Always', 13: 'Sometimes', 14: 'Never', 15: 'Always', 16: 'Sometimes', 17: 'Never', 18:'Always'}

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
        marginVertical: 1,
        marginHorizontal: 18,
        textAlign: 'left',
        alignSelf: 'stretch',
        fontWeight: 'bold',
        fontSize: 14,
        paddingTop: 4,
    },
    paragraph: {
        alignSelf: "center",
        paddingVertical: 1,
        paddingHorizontal: 5,
        fontSize: 14,
        marginTop: 5,
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
    }
});