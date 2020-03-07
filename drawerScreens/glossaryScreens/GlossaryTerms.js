import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
        marginVertical: 2
    },
    term: {
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 2
    },
    contentContainer: {
        padding: 20,
        backgroundColor: "white"
    }
});
