import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Button, ButtonGroup, Card } from "react-native-elements";
import NavigationService from "../components/NavigationService";
import QuizRateReactions from "../assets/QuizRateReactions.jpg";
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
    en: { header: 'Take the Quiz',
          op1: 'Always', 
          op2: 'Sometimes',
          op3: 'Never',
          title: 'Quiz',
          accessibilityLabelCont: 'Quiz to rate child\'s traumatic stress level',
          accessabilityLabelPic: 'Image of child reacting to stress',
          title: 'Rate your child\'s reactions in the quiz below.',
          description: 'You can rate these on your own, based on what you have noticed with your child. If possible, you may want to involve your child in answering these questions with you.',
        },
    es: { header: 'Haz la Prueba',
          op1: 'Siempre', 
          op2: 'Aveces',
          op3: 'Nunca', 
          title: 'Examen',
          accessibilityLabelCont: 'Prueba para calificar el nivel de estrés traumático del niño',
          accessibilityLabelPic: 'Imagen del niño reaccionando al estrés',
          title: 'Evale las Reacciones de su Hijo.',
          description: 'Puede evaluar las reacciones por su cuenta (en base a lo que usted haya notado en su hijo). O mejor aún, haga que su hijo participe en la evaluación de sus reacciones o síntomas del trauma con usted.',
        },
  };

i18n.locale = Localization.locale;
i18n.fallbacks = true;

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
        headerTitle: i18n.t('header')
    }

    render() {
        console.log(Localization.locale)
        
        // selectedIndex of each Radio ButtonGroup [0, 1, 2] coincides with the array below. 0 -> Always, 1 -> Sometimes, 2 -> Never
        const buttons = [i18n.t('op1'), i18n.t('op2'), i18n.t('op3')];
        return (
            <View style={styles.container} accessible accessibilityLabel={i18n.t('accessabilityLabelCont')}>
                <ScrollView>
                    <Card image={QuizRateReactions} featuredTitle={i18n.t('header')} featuredTitleStyle={{fontSize:42}} containerStyle={{margin:8, padding:-1}}
                             accessible accessibilityLabel={i18n.t('accessabilityLabelPic')}>
                        <Text style={{marginVertical:-8, textAlign:'center'}}>{i18n.t('title')}</Text></Card>
                    <Text style={styles.paragraph}>{i18n.t('description')}</Text>
                    <Text style={styles.questionTitle}>
                        Re-experiencing: Reliving what happened</Text>
                        <Text style={styles.question}>
                       1. Thinks a lot about what happened to them</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'1': e})} selectedIndex={this.state[1]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        2. Has bad dreams or nightmares since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'2': e})} selectedIndex={this.state[2]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        3. Gets upset or has physical reactions (headache, stomachache, heart pounding) at reminders of what happened</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'3': e})} selectedIndex={this.state[3]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.questionTitle}>
                        Avoidance: Staying away from reminders</Text>

                        <Text style={styles.question}>
                        4. Doesn’t want to talk about what happened or tries to push it out of their mind</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'4': e})} selectedIndex={this.state[4]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        5. Wants to stay away from people, places, or things that are reminders of what happened</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'5': e})} selectedIndex={this.state[5]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        6. Afraid of something that they were not afraid of before (or a previous fear or worry seems to get worse)</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'6': e})} selectedIndex={this.state[6]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        7. Not interested in usual activities, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'7': e})} selectedIndex={this.state[7]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        8. Not interested in being with people they usually like being with ,since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'8': e})} selectedIndex={this.state[8]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.questionTitle}>
                        Hyper-arousal: Feeling anxious or jumpy</Text>

                        <Text style={styles.question}>
                        9. Worries a lot that something else bad will happen</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'9': e})} selectedIndex={this.state[9]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        10. Startles easily – for example, jumps if there is a sudden noise</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'10': e})} selectedIndex={this.state[10]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        11. Seems irritable or has angry outbursts, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'11': e})} selectedIndex={this.state[11]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        12. Has trouble paying attention to things, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'12': e})} selectedIndex={this.state[12]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        13. Has trouble falling or staying asleep, since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'13': e})} selectedIndex={this.state[13]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.questionTitle}>
                        Other concerns about your child</Text>

                        <Text style={styles.question}>
                        14. Is still having pain or discomfort</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'14': e})} selectedIndex={this.state[14]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        15. Has had other behavior changes since the injury</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'15': e})} selectedIndex={this.state[15]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        16. Is having trouble with returning to school or other activities</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'16': e})} selectedIndex={this.state[16]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.questionTitle}>
                        Concerns about how others in the family are coping</Text>

                        <Text style={styles.question}>
                        17. Brothers or sisters are upset or worried</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'17': e})} selectedIndex={this.state[17]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.question}>
                        18. You (parent) are stressed or worried yourself</Text>
                        <ButtonGroup buttons={buttons} onPress={(e) => this.setState({'18': e})} selectedIndex={this.state[18]} containerStyle={styles.buttonGroupContainer}/>
                        <Text style={styles.finePrint}><Text style={{fontWeight:'bold'}}>Note:</Text> This is not a formal medical or psychological assessment or diagnosis.{'\n'}
                                If you are concerned with how you or your child is doing, please contact your doctor, 
                                mental health professional, or other healthcare provider.{'\n\n'}
                                <Text style={{fontWeight:'bold'}}>To Healthcare Professionals:</Text> Please use these ratings as a basis for conversation to 
                                learn more about your patient’s response to a recent injury.</Text>
                    <Button onPress={() => { NavigationService.navigate('QuizResults', { 'results': this.state })}} title='Submit' raised containerStyle={{marginHorizontal:110, marginVertical:12}}
                            accessible accessibilityLabel='Click here to submit your results'></Button>
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
    buttonGroupContainer: {
        height:28,      
        alignContent:'center',  
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
    question: {
        marginVertical: 1,
        marginHorizontal: 12,
        fontSize: 15,
        marginTop: 5,
        fontWeight:'bold',
    },
    paragraph: {
        marginVertical: 1,
        marginHorizontal: 10,
        fontSize: 14,
        marginTop: 5,
    },
    finePrint: {
        fontSize: 10,
        marginTop: 2,
        marginHorizontal:8,

    },
    questionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        marginTop: 3,
        marginBottom: 3,
        color: '#2089DC',
        paddingLeft: 6,
        paddingRight: 6,
    }
});