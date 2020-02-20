import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Button as CardButton } from "react-native-elements";
import renderer from "react-test-renderer";
import NavigationService from "../NavigationService";
import QuizCard from "../QuizCard";

jest.mock("../NavigationService.js");

configure({ adapter: new Adapter() });
describe("QuizCard", () => {
    it("renders correctly", () => {
        expect(renderer.create(<QuizCard />).toJSON()).toMatchSnapshot();
    });

    it("navigates to the quiz screen on button press", () => {
        const wrapper = shallow(<QuizCard />);
        wrapper
            .find(CardButton)
            .last()
            .props()
            .onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith("Quiz");
    });
});
