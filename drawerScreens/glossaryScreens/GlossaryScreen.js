import i18n from "i18n-js";
import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import NavigationService from "../../components/NavigationService";
import PchPtsdAccordion from "../../components/shared/PchPtsdAccordion";
import * as accordionContent from "./glossary.json";
import GlossaryScreenCard from "./GlossaryScreenCard";
import GlossaryTerms from "./GlossaryTerms";
import { LOCALE } from "../../mainAndLists/MainScreen";

i18n.translations = {
  en: { title: "Back", glossary: "Glossary" },
  es: { title: "Atrás", glossary: "Glosario" }
};
i18n.fallbacks = true;
i18n.locale = LOCALE;

i18n.translations = {
  en: {
    title: "Back",
    glossary: "Glossary",
    description: "Find word definitions by category."
  },
  es: {
    title: "Atrás",
    glossary: "Glosario",
    description: "Encuentra definiciones de palabras por categoría"
  }
};

class GlossaryScreen extends Component {
  static navigationOptions = {
    headerTitle: i18n.t("glossary"),
    headerLeft: (
      <View style={{ margin: 5 }}>
        <Button
          onPress={() => NavigationService.navigateDrawer("Home")}
          title={i18n.t("title")}
        ></Button>
      </View>
    )
  };

  _unsupportedLangToEnglish(locale) {
    lang = locale.substring(0, 2);
    return lang ? lang : "en";
  }

  render() {
    console.log(LOCALE);
    return (
      <View style={styles.container}>
        <ScrollView>
          <GlossaryScreenCard />
          <PchPtsdAccordion
            sections={accordionContent[this._unsupportedLangToEnglish(LOCALE)]}
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
