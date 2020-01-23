import i18n from "i18n-js";
import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import NavigationService from "../../components/NavigationService";
import PchPtsdAccordion from "../../components/shared/PchPtsdAccordion";
import GlossaryScreenCard from "./GlossaryScreenCard";
import GlossaryTerms from "./GlossaryTerms";
import translate from "../../components/translateService";

class GlossaryScreen extends Component {
  static navigationOptions = {
    headerTitle: translate("glossary.glossary"),
    headerLeft: (
      <View style={{ margin: 5 }}>
        <Button
          onPress={() => NavigationService.navigateDrawer("Home")}
          title={translate("glossary.title")}
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
            sections={translate("glossary.accordion")}
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
