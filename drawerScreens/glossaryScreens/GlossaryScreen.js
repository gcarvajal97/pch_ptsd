import i18n from "i18n-js";
import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import NavigationService from "../../components/NavigationService";
import PchPtsdAccordion from "../../components/shared/PchPtsdAccordion";
import { LOCALE } from "../../mainAndLists/MainScreen";
import * as accordionContent from "./glossary.json";
import GlossaryScreenCard from "./GlossaryScreenCard";
import GlossaryTerms from "./GlossaryTerms";

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
<<<<<<< HEAD
=======

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
>>>>>>> 0ef74ae766b0eda807f98aae0f8ec2e7adafa932

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
