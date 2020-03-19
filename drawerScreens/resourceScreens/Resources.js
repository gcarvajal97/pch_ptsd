import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Linking } from "expo";
import colors from '../../colors';

function Resources(content) {
    if(content && content.length) {
        return (
            <View>
                {content.map((item, index) => {
                    return (
                        <View style={styles.contentContainer} key={index}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL(item.link.url)}
                                accessible
                                accessibilityLabel={item.link.accessibilityLabel}
                                accessibilityHint={item.link.accessibilityHint}
                            >
                                {item.link.text}
                            </Text>
                            <Text style={styles.paragraph}>{"\n"}{item.contentText}</Text>
                        </View>
                    );
                })}
            </View>
        );
    } else {
        return (
            <View>
                <Text>Error: Resources content is in valid!</Text>
            </View>
        );
    }
}

export default Resources;

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
        backgroundColor: "white"
    },
    paragraph: {
        fontSize: 14,
        marginVertical: 2
    },
    link: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.secondary.pms_3005,
        textDecorationLine: "underline",
        marginVertical: 2
    }
});
