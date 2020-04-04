import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, ButtonGroup, Card } from "react-native-elements";
import QuizRateReactions from "../assets/QuizRateReactions.jpg";
import colors from "../colors.js";
import NavigationService from "../components/NavigationService";
import translate from "../components/translateService";

class QuizMain extends Component {
    constructor() {
        super();
        // State is set for every question with an initial state, submit button will pass the current state of each question when pressed.
        this.state = {
            1: 2,
            2: 2,
            3: 2,
            4: 2,
            5: 2,
            6: 2,
            7: 2,
            8: 2,
            9: 2,
            10: 2,
            11: 2,
            12: 2,
            13: 2,
            14: 2,
            15: 2,
            16: 2,
            17: 2,
            18: 2
        };
    }

    static navigationOptions = {
        headerTitle: translate("quizMain.header")
    };

    render() {
        // selectedIndex of each Radio ButtonGroup [0, 1, 2] coincides with the array below. 0 -> Always, 1 -> Sometimes, 2 -> Never
        const buttons = [
            translate("quizMain.op1"),
            translate("quizMain.op2"),
            translate("quizMain.op3")
        ];
        return (
            <View
                style={styles.container}
                accessible
                accessibilityLabel={translate(
                    "quizMain.accessibilityLabelCont"
                )}
            >
                <ScrollView>
                    <Card
                        image={QuizRateReactions}
                        featuredTitle={translate("quizMain.header")}
                        featuredTitleStyle={{ fontSize: 42 }}
                        containerStyle={{ margin: 8, padding: -1 }}
                        accessible
                        accessibilityLabel={translate(
                            "quizMain.accessibilityLabelPic"
                        )}
                    >
                        <Text
                            style={{ marginVertical: -8, textAlign: "center" }}
                        >
                            {translate("quizMain.title")}
                        </Text>
                    </Card>
                    <Text style={styles.paragraph}>
                        {translate("quizMain.description")}
                    </Text>
                    <Text style={styles.questionTitle}>
                        {translate("quizMain.qt1")}
                    </Text>
                    <Text style={styles.question}>
                        {translate("quizMain.q1")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "1": e })}
                        selectedIndex={this.state[1]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {" "}
                        {translate("quizMain.q2")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "2": e })}
                        selectedIndex={this.state[2]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {" "}
                        {translate("quizMain.q3")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "3": e })}
                        selectedIndex={this.state[3]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />

                    <Text style={styles.questionTitle}>
                        {" "}
                        {translate("quizMain.qt2")}
                    </Text>
                    <Text style={styles.question}>
                        {translate("quizMain.q4")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "4": e })}
                        selectedIndex={this.state[4]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q5")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "5": e })}
                        selectedIndex={this.state[5]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q6")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "6": e })}
                        selectedIndex={this.state[6]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q7")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "7": e })}
                        selectedIndex={this.state[7]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q8")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "8": e })}
                        selectedIndex={this.state[8]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />

                    <Text style={styles.questionTitle}>
                        {translate("quizMain.qt3")}
                    </Text>
                    <Text style={styles.question}>
                        {translate("quizMain.q9")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "9": e })}
                        selectedIndex={this.state[9]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q10")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "10": e })}
                        selectedIndex={this.state[10]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q11")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "11": e })}
                        selectedIndex={this.state[11]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q12")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "12": e })}
                        selectedIndex={this.state[12]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q13")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "13": e })}
                        selectedIndex={this.state[13]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />

                    <Text style={styles.questionTitle}>
                        {translate("quizMain.qt4")}
                    </Text>
                    <Text style={styles.question}>
                        {translate("quizMain.q14")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "14": e })}
                        selectedIndex={this.state[14]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q15")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "15": e })}
                        selectedIndex={this.state[15]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q16")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "16": e })}
                        selectedIndex={this.state[16]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />

                    <Text style={styles.questionTitle}>
                        {translate("quizMain.qt5")}
                    </Text>
                    <Text style={styles.question}>
                        {translate("quizMain.q17")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "17": e })}
                        selectedIndex={this.state[17]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />
                    <Text style={styles.question}>
                        {translate("quizMain.q18")}
                    </Text>
                    <ButtonGroup
                        buttons={buttons}
                        onPress={e => this.setState({ "18": e })}
                        selectedIndex={this.state[18]}
                        selectedButtonStyle={styles.selectedButton}
                        containerStyle={styles.buttonGroupContainer}
                    />

                    <Text style={styles.finePrint}>
                        <Text style={{ fontWeight: "bold" }}>
                            {translate("quizMain.note")}
                        </Text>
                        {translate("quizMain.disclaimer1")}
                        <Text style={{ fontWeight: "bold" }}>
                            {translate("quizMain.toHealthProf")}
                        </Text>
                        {translate("quizMain.disclaimer2")}
                    </Text>
                    <Button
                        onPress={() => {
                            NavigationService.navigate("QuizResults", {
                                results: this.state
                            });
                        }}
                        title="Submit"
                        buttonStyle={styles.submitButton}
                        raised
                        containerStyle={{
                            marginHorizontal: 110,
                            marginVertical: 12
                        }}
                        accessible
                        accessibilityLabel={translate(
                            "quizMain.accessibilityLabelSub"
                        )}
                    ></Button>
                </ScrollView>
            </View>
        );
    }
}
export default QuizMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: 10,
        backgroundColor: colors.primary.white,
        shadowColor: colors.primary.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    },
    buttonGroupContainer: {
        height: 28,
        alignContent: "center"
    },
    bullet: {
        marginVertical: 1,
        marginHorizontal: 18,
        textAlign: "left",
        alignSelf: "stretch",
        fontWeight: "bold",
        fontSize: 14,
        paddingTop: 4
    },
    question: {
        marginVertical: 1,
        marginHorizontal: 12,
        fontSize: 15,
        marginTop: 5,
        fontWeight: "bold"
    },
    paragraph: {
        marginVertical: 1,
        marginHorizontal: 10,
        fontSize: 14,
        marginTop: 5
    },
    finePrint: {
        fontSize: 10,
        marginTop: 2,
        marginHorizontal: 8,
        textAlign: "center"
    },
    questionTitle: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "left",
        marginTop: 3,
        marginBottom: 3,
        color: colors.accent,
        paddingLeft: 6,
        paddingRight: 6
    },
    selectedButton: {
        backgroundColor: colors.accent
    },
    submitButton: {
      backgroundColor: colors.accent
    }
});
