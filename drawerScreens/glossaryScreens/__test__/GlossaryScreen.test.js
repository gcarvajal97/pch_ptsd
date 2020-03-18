import i18n from "i18n-js";
import React from "react";
import renderer from "react-test-renderer";
import NavigationService from "../../../components/NavigationService";
import GlossaryScreen from "../GlossaryScreen";
import { Platform } from "react-native";

jest.mock("../../../components/NavigationService.js");

describe("GlossaryScreen", () => {
    beforeEach(() => {
        i18n.locale = "en";
        Platform.OS = "ios";
    });

    it("renders correctly", () => {
        const tree = renderer.create(<GlossaryScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correctly in Spanish on Android", () => {
        i18n.locale = "es";
        Platform.OS = "android";
        const tree = renderer.create(<GlossaryScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("calls the navigation service on back press", () => {
        GlossaryScreen.navigationOptions.headerLeft.props.onPress();
        expect(NavigationService.navigateDrawer).toHaveBeenCalledWith("Home");
    });
});
