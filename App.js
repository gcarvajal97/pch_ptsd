import React from "react";
import * as Font from "expo-font";
import { setCustomText } from "react-native-global-props";
import MainNavigator from "./components/MainNavigator";

const globalTextProps = {
    style: {
        fontFamily: "avenir-medium"
    }
};

export default class App extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            "avenir-medium": require("./assets/fonts/Avenir-Medium.ttf")
        });
        setCustomText(globalTextProps);
    }
    render() {
        return <MainNavigator />;
    }
}
