import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import { LOCALE } from "../../mainAndLists/MainScreen";
import i18n from "i18n-js";

export default class GlossaryScreenCard extends Component {
  render() {
    return (
      <Card
        featuredTitle={i18n.t("glossary")}
        featuredTitleStyle={{ fontSize: 40 }}
        image={require("../../assets/GlossaryScreen.jpg")}
        accessible
        accessibilityLabel={i18n.t("accessabilityLabel")}
      >
        <Text
          style={{ marginVertical: -8, fontWeight: "500", textAlign: "center" }}
        >
          {i18n.t("description")}
        </Text>
      </Card>
    );
  }
}
