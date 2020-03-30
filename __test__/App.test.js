import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SplashScreen } from "expo";
import { ExpoFontLoader } from "expo-font";

Enzyme.configure({ adapter: new Adapter() });
jest.mock("../components/MainNavigator");
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
jest.mock("expo", () => ({
    SplashScreen: {
        hide: jest.fn(),
        preventAutoHide: jest.fn()
    }
}));

describe("App", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("matches Snapshot", () => {
        const snap = renderer.create(<App />).toJSON();
        expect(snap).toMatchSnapshot();
    });

    it("hides the splash screen and renders the app when the font is loaded", async () => {
        const component = shallow(<App />);
        component.setState({ fontLoaded: true });
        expect(SplashScreen.hide).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
    });
});
