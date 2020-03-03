import React from 'react';
import ResourceScreen from '../ResourceScreen';
import NavigationService from "../../../components/NavigationService";
import renderer from 'react-test-renderer';
import { Platform } from "react-native";
import i18n from "i18n-js";

jest.mock("../../../components/NavigationService.js");

describe("ResourceScreen", () => {

    beforeEach(() => {
        i18n.local = "en";
        Platform.OS = "ios";
    });

    it('renders correctly', () => {
        const tree = renderer.create(<resourceScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correctly in Spanish on Android", () => {
        i18n.locale = "es";
        Platform.OS = "android";
        const tree = renderer.create(<ResourceScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("calls the navigation service on back press", () => {
        ResourceScreen.navigationOptions.headerLeft.props.onPress();
        expect(NavigationService.navigateDrawer).toHaveBeenCalledWith("Home");
    });

});