import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import NavigationService from "../../components/NavigationService";
import PchPtsdAccordion from "../../components/shared/PchPtsdAccordion";
import * as translations from "./glossary.json";
import GlossaryScreenCard from "./GlossaryScreenCard";
import GlossaryTerms from "./GlossaryTerms";

class GlossaryScreen extends Component {
  // Gives the NavBar a title for this specific screen
  static navigationOptions = {
    headerTitle: "Glossary",
    headerLeft: (
      <View style={{ margin: 5 }}>
        <Button
          onPress={() => NavigationService.navigateDrawer("Home")}
          title="Back"
        ></Button>
      </View>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <GlossaryScreenCard />
          <PchPtsdAccordion
            sections={translations["en"]}
            contentRenderFunction={GlossaryTerms}
          />
        </ScrollView>
      </View>
    );
  }
}

export default GlossaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  }
});
