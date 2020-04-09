import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Video } from "expo-av";
import translate, { getVideo } from "../components/translateService";
import colors from '../colors';

const videos = {
    en: require("../assets/videos/vidDealWithWorries.mp4"),
    es: require("../assets/videos/vidDealWithWorriesEs.mp4"),
};

class DealWithWorries extends Component {
    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: translate("dealWithWorries.header")
    };

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        backgroundColor: colors.accent,
                        color: colors.primary.white,
                        fontFamily: "avenir-heavy",
                        fontSize: 22,
                        textAlign: "center",
                        alignSelf: "stretch"
                    }}
                >
                    {translate("dealWithWorries.video_title")}
                </Text>
                <Video
                    source={getVideo(videos)}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{
                        height: 204,
                        width: "100%",
                        maxHeight: 254,
                        borderColor: colors.accent,
                        borderWidth: 14,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        marginBottom: -1
                    }}
                    accessibilityLabel={translate(
                        "dealWithWorries.accessibilityLabel"
                    )}
                    accessibilityHint={translate(
                        "dealWithWorries.accessibilityHint"
                    )}
                />
                <Text
                    style={{
                        backgroundColor: colors.accent,
                        color: colors.primary.white,
                        alignSelf: "stretch",
                        paddingLeft: 15,
                        fontSize: 15,
                        borderBottomWidth: 2,
                        fontFamily: "avenir-medium",
                        borderBottomColor: colors.accent
                    }}
                >
                    <Text style={{ fontFamily: "avenir-heavy" }}>
                        {translate("dealWithWorries.video_subtitle_1")}
                    </Text>
                    {translate("dealWithWorries.video_subtitle_2")}
                </Text>
                <ScrollView>
                    <Text style={styles.headline}>
                        {translate("dealWithWorries.q1")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q1_p1")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q1_p2")}
                    </Text>

                    <Text style={styles.headline}>
                        {translate("dealWithWorries.q2")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q2_p1")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q2_p2")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q2_p3")}
                    </Text>

                    <Text style={styles.headline}>
                        {translate("dealWithWorries.q3")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q3_p1")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q3_p2")}
                    </Text>

                    <Text style={styles.headline}>
                        {translate("dealWithWorries.q4")}
                    </Text>
                    <Text style={styles.paragraphBold}>
                        {translate("dealWithWorries.q4_tip1")}
                    </Text>
                    <Text style={styles.bulletLight}>
                        {translate("dealWithWorries.q4_tip1_bullet")}
                    </Text>
                    <Text style={styles.paragraphBold}>
                        {translate("dealWithWorries.q4_tip2")}
                    </Text>
                    <Text style={styles.bulletLight}>
                        {translate("dealWithWorries.q4_tip2_bullet")}
                    </Text>
                    <Text style={styles.paragraphBold}>
                        {translate("dealWithWorries.q4_tip3")}
                    </Text>
                    <Text style={styles.bulletLight}>
                        {translate("dealWithWorries.q4_tip3_bullet")}
                    </Text>
                    <Text style={styles.paragraphBold}>
                        {translate("dealWithWorries.q4_tip4")}
                    </Text>
                    <Text style={styles.bulletLight}>
                        {translate("dealWithWorries.q4_tip4_bullet")}
                    </Text>
                    <Text style={styles.paragraphBold}>
                        {translate("dealWithWorries.q4_tip5")}
                    </Text>
                    <Text style={styles.bulletLight}>
                        {translate("dealWithWorries.q4_tip5_bullet1")}
                    </Text>
                    <Text style={styles.bulletLight}>
                        {translate("dealWithWorries.q4_tip5_bullet2")}
                    </Text>

                    <Text style={styles.headline}>
                        {translate("dealWithWorries.q5")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q5_p1")}
                    </Text>
                    <Text style={styles.paragraph}>
                        {translate("dealWithWorries.q5_p2")}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}
export default DealWithWorries;

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
    bullet: {
        marginVertical: 1,
        marginHorizontal: 18,
        textAlign: "left",
        alignSelf: "stretch",
        fontFamily: "avenir-heavy",
        fontSize: 14,
        paddingTop: 4
    },
    bulletLight: {
        marginVertical: 1,
        marginHorizontal: 18,
        textAlign: "left",
        alignSelf: "stretch",
        fontFamily: "avenir-medium",
        fontSize: 14,
        paddingTop: 4
    },
    paragraph: {
        alignSelf: "center",
        paddingVertical: 1,
        paddingHorizontal: 5,
        fontSize: 14,
        fontFamily: "avenir-medium",
        marginTop: 5
    },
    paragraphBold: {
        textAlign: "left",
        paddingVertical: 1,
        paddingHorizontal: 5,
        fontSize: 14,
        marginTop: 5,
        fontFamily: "avenir-heavy"
    },
    headline: {
        fontFamily: "avenir-heavy",
        fontSize: 20,
        alignSelf: "stretch",
        textAlign: "left",
        marginLeft: 5,
        marginTop: 4,
        marginBottom: 3,
        color: colors.accent
    }
});
