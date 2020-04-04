import React from "react";
import * as Font from "expo-font";
import { setCustomText } from "react-native-global-props";
import MainNavigator from "./components/MainNavigator";
import { SplashScreen } from "expo";

const globalTextProps = {
    style: {
        fontFamily: "avenir-medium"
    }
};

export default class App extends React.Component {
    state = {
        fontLoaded: false
    };

    async componentDidMount() {
        SplashScreen.preventAutoHide();
        await Font.loadAsync({
            "avenir-medium": require("./assets/fonts/Avenir-Medium.ttf"),
            "avenir-heavy": require("./assets/fonts/Avenir-Heavy.ttf")
        });
        // Having issues mocking the expo-font module
        // Not sure if we can actually reach this code in a test.
        /* istanbul ignore next */
        setCustomText(globalTextProps);
        /* istanbul ignore next */
        this.setState({ fontLoaded: true });
    }

    render() {
        if (this.state.fontLoaded) {
            SplashScreen.hide();
            return <MainNavigator />;
        } else {
            return null;
        }
    }
}
