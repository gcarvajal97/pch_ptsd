import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import NavigationService from "../components/NavigationService";


class QuizMain extends Component {
    constructor () {
        super()
        // State is set for every question with an initial state, submit button will pass the current state of each question when pressed.
        this.state = {
          1: 2, 2: 2, 3: 2, 4: 2, 5: 2,
          6: 2, 7: 2, 8: 2, 9: 2, 10: 2,
          11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 
          16: 2, 17: 2, 18: 2
        }
      }

      static navigationOptions = {
        headerTitle: 'Take the Quiz'
    }

    render() {
        // selectedIndex of each Radio ButtonGroup [0, 1, 2] coincides with the array below. 0 -> Always, 1 -> Sometimes, 2 -> Never
        const buttons = ['Always', 'Sometimes', 'Never'];
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.paragraphTitle}>Rate Your Child's Reactions</Text>
                    <Text style={styles.paragraph}>You can rate these on your own (based on what you have noticed with your child). If possible, it may
                     even be better to involve your child in rating their own reactions with you.</Text>
                    <Text style={styles.paragraph}>
                        Re-experiencing: Reliving what happened{'\n\n'}
                        1. Thinks a lot about what happened to them</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'1': e})} selectedIndex={this.state[1]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        2. Has bad dreams or nightmares since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'2': e})} selectedIndex={this.state[2]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        3. Gets upset or has physical reactions (headache, stomachache, heart pounding) at reminders of what happened</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'3': e})} selectedIndex={this.state[3]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        Avoidance: Staying away from reminders{'\n\n'}
                        4. Doesn’t want to talk about what happened or tries to push it out of their mind</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'4': e})} selectedIndex={this.state[4]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        5. Wants to stay away from people, places, or things that are reminders of what happened</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'5': e})} selectedIndex={this.state[5]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        6. Afraid of something that they were not afraid of before (or a previous fear or worry seems to get worse)</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'6': e})} selectedIndex={this.state[6]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        7. Not interested in usual activities, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'7': e})} selectedIndex={this.state[7]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        8. Not interested in being with people they usually like being with, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'8': e})} selectedIndex={this.state[8]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        Hyper-arousal: Feeling anxious or jumpy{'\n\n'}
                        9. Worries a lot that something else bad will happen</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'9': e})} selectedIndex={this.state[9]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        10. Startles easily – for example, jumps if there is a sudden noise</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'10': e})} selectedIndex={this.state[10]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        11. Seems irritable or has angry outbursts, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'11': e})} selectedIndex={this.state[11]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        12. Has trouble paying attention to things, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'12': e})} selectedIndex={this.state[12]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        13. Has trouble falling or staying asleep, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'13': e})} selectedIndex={this.state[13]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        Other concerns about your child{'\n\n'}
                        14. Is still having pain or discomfort</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'14': e})} selectedIndex={this.state[14]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        15. Has had other behavior changes since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'15': e})} selectedIndex={this.state[15]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        16. Is having trouble with returning to school or other activities</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'16': e})} selectedIndex={this.state[16]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        Concerns about how others in the family are coping{'\n\n'}
                        17. Brothers or sisters are upset or worried</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'17': e})} selectedIndex={this.state[17]} containerStyle={{height:30}}/>
                        <Text style={styles.paragraph}>
                        18. You (parent) are stressed or worried yourself</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'18': e})} selectedIndex={this.state[18]} containerStyle={{height:30}}/>
                        <Text style={styles.finePrint}>Note: This is not a formal medical or psychological assessment or diagnosis.{'\n'}
                                If you are concerned with how you or your child is doing, please contact your doctor, 
                                mental health professional, or other healthcare provider.{'\n\n'}
                                To Healthcare Professionals: Please use these ratings as a basis for conversation to 
                                learn more about your patient’s response to a recent injury.</Text>
                    <Button onPress={() => { NavigationService.navigate('QuizResults', { 'results': this.state })}} title='Submit' raised containerStyle={{marginHorizontal:110, marginVertical:12}}></Button>
                </ScrollView>
            </View>
        );
    }
}
export default QuizMain;

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
        //alignSelf: "center",
        paddingVertical: 1,
        paddingHorizontal: 5,
        fontSize: 14,
        marginTop: 5,
    },
    finePrint: {
        fontSize: 10,
        marginTop: 2,
        marginHorizontal:8,

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