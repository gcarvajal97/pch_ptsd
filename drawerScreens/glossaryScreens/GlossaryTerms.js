import React from "react";
import { StyleSheet, Text, View } from "react-native";

function GlossaryTerms(content) {
  content = Array.from(content);
  return (
    <View>
      {content.map((item, index) => {
        
        return (
          <View style={styles.contentContainer} key={index}>
            <Text style={styles.term}>{item.term}</Text>
            <Text style={styles.definition}>{item.definition}</Text>
          </View>
        );
      })}
    </View>
  );
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
