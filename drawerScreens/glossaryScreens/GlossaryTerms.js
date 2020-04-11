import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../colors";

function GlossaryTerms(content) {
    if (content && content.length) {
        return (
            <View>
                {content.map((item, index) => {
                    return (
                        <View style={styles.contentContainer} key={index}>
                            <Text style={styles.term}>{item.term}</Text>
                            <Text style={styles.definition}>
                                {item.definition}
                            </Text>
                        </View>
                    );
                })}
            </View>
        );
    } else {
        return (
            <View>
                <Text>Oops, glossary term content is invalid!</Text>
            </View>
        );
    }
}

export default GlossaryTerms;

const styles = StyleSheet.create({
    definition: {
        fontSize: 14,
    },
    term: {
        fontSize: 14,
        fontFamily: "avenir-heavy",
    },
    contentContainer: {
        padding: 18,
        paddingVertical: 10,
        backgroundColor: colors.primary.white
    }
});
