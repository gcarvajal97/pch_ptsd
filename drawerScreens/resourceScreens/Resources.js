import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Linking } from "expo";

function Resources(content) {
    content = Array.from(content);
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
        color: "#2089DC",
        textDecorationLine: "underline",
        marginVertical: 2
    }
});
