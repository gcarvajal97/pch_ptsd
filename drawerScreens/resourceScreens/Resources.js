import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Linking } from "expo";
import colors from "../../colors";

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
                            <Text style={styles.paragraph}>{item.contentText}</Text>
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
        padding: 16,
        paddingVertical: 12,
        backgroundColor: colors.primary.white
    },
    paragraph: {
        fontSize: 14,
    },
    link: {
        fontSize: 16,
        fontFamily: "avenir-heavy",
        color: colors.accent,
        textDecorationLine: "underline",
    }
});
