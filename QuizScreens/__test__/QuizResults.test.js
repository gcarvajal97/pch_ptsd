import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import NavigationService from "../../components/NavigationService";
import QuizResults from "../QuizResults";
import translate from "../../components/translateService";

jest.mock("../../components/NavigationService.js");
jest.mock("../../components/translateService.js");

describe("QuizResults", () => {
    it("renders correctly", () => {
        let navigation = {
            getParam: (param, value) => {
                return {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0
                };
            }
        };
        expect(
            renderer.create(<QuizResults navigation={navigation} />).toJSON()
        ).toMatchSnapshot();
    });

    it("displays a message if no quiz questions were answered", () => {
        let navigation = {
            getParam: (param, value) => {
                return {};
            }
        };
        renderer.create(<QuizResults navigation={navigation} />);
        expect(translate).toHaveBeenCalledWith("quizResults.noAnswers");
    });
});
