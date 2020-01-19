import { Component } from "react";

class GlossaryTerm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    <View>
      <Text style={styles.paragraphBold}>this.props.term</Text>
      <Text style={styles.paragraph}>this.props.definition{"\n"}</Text>
    </View>;
  }
}
