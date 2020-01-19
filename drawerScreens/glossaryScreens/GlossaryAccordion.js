import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";



class GlossaryAccordion extends Component {
  state = {
    activeSections: [],
  };

  constructor(props) {
    super(props);
  }

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.paragraphBold}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    console.log("_renderContent: ", section);
    return (
      <View>
        {
          section.content.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item.term}</Text>
              <Text>{item.description}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={this.props.sections}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}

export default GlossaryAccordion;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#2089DC",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "stretch",
    textAlign: "center"
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10
  },
  headerText: {
    fontWeight: "500",
    fontSize: 16
  },
  content: {
    padding: 20,
    backgroundColor: "#fff"
  },
  active: {
    backgroundColor: "white"
  },
  inactive: {
    backgroundColor: "white"
  },
  paragraph: {
    textAlign: "left",
    fontSize: 14,
    marginVertical: 2
  },
  paragraphBold: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 2
  }
});
