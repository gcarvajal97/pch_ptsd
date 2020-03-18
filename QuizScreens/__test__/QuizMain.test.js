import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Button, ButtonGroup } from "react-native-elements";
import renderer from "react-test-renderer";
import NavigationService from "../../components/NavigationService";
import QuizMain from "../QuizMain";

jest.mock("../../components/NavigationService.js");

configure({ adapter: new Adapter() });

describe("QuizMain", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<QuizMain />);
        jest.clearAllMocks();
    });

    it("renders correctly", () => {
        expect(renderer.create(<QuizMain />).toJSON()).toMatchSnapshot();
    });

    it("should set the value for the '1' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(0)
            .props()
            .onPress(0);
        expect(wrapper.state(1)).toEqual(0);
    });

    it("should set the value for the '2' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(1)
            .props()
            .onPress(0);
        expect(wrapper.state(2)).toEqual(0);
    });

    it("should set the value for the '3' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(2)
            .props()
            .onPress(0);
        expect(wrapper.state(3)).toEqual(0);
    });

    it("should set the value for the '4' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(3)
            .props()
            .onPress(0);
        expect(wrapper.state(4)).toEqual(0);
    });

    it("should set the value for the '5' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(4)
            .props()
            .onPress(0);
        expect(wrapper.state(5)).toEqual(0);
    });

    it("should set the value for the '6' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(5)
            .props()
            .onPress(0);
        expect(wrapper.state(6)).toEqual(0);
    });

    it("should set the value for the '7' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(6)
            .props()
            .onPress(0);
        expect(wrapper.state(7)).toEqual(0);
    });

    it("should set the value for the '8' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(7)
            .props()
            .onPress(0);
        expect(wrapper.state(8)).toEqual(0);
    });

    it("should set the value for the '9' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(8)
            .props()
            .onPress(0);
        expect(wrapper.state(9)).toEqual(0);
    });

    it("should set the value for the '10' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(9)
            .props()
            .onPress(0);
        expect(wrapper.state(10)).toEqual(0);
    });

    it("should set the value for the '11' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(10)
            .props()
            .onPress(0);
        expect(wrapper.state(11)).toEqual(0);
    });

    it("should set the value for the '12' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(11)
            .props()
            .onPress(0);
        expect(wrapper.state(12)).toEqual(0);
    });

    it("should set the value for the '13' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(12)
            .props()
            .onPress(0);
        expect(wrapper.state(13)).toEqual(0);
    });

    it("should set the value for the '14' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(13)
            .props()
            .onPress(0);
        expect(wrapper.state(14)).toEqual(0);
    });

    it("should set the value for the '15' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(14)
            .props()
            .onPress(0);
        expect(wrapper.state(15)).toEqual(0);
    });

    it("should set the value for the '16' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(15)
            .props()
            .onPress(0);
        expect(wrapper.state(16)).toEqual(0);
    });

    it("should set the value for the '17' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(16)
            .props()
            .onPress(0);
        expect(wrapper.state(17)).toEqual(0);
    });

    it("should set the value for the '18' property in state", () => {
        wrapper
            .find(ButtonGroup)
            .at(17)
            .props()
            .onPress(0);
        expect(wrapper.state(18)).toEqual(0);
    });

    it("should navigate to the QuizResults screen", () => {
        wrapper
            .find(Button)
            .props()
            .onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith("QuizResults", {
            results: {
                1: 2,
                2: 2,
                3: 2,
                4: 2,
                5: 2,
                6: 2,
                7: 2,
                8: 2,
                9: 2,
                10: 2,
                11: 2,
                12: 2,
                13: 2,
                14: 2,
                15: 2,
                16: 2,
                17: 2,
                18: 2
            }
        });
    });
});
