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
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders correctly", () => {
        let navigation = {
            getParam: (param, value) => {
                return {};
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

    it("displays cards if quiz responses are valid", () => {
        let navigation = {
            getParam: (param, value) => {
                return {
                    1: 0,
                    2: 1,
                };
            }
        };
        renderer.create(<QuizResults navigation={navigation} />);
        expect(translate).not.toHaveBeenCalledWith("quizResults.noAnswers");
        expect(translate).toHaveBeenCalledWith("quizResults.q1title")
        expect(translate).toHaveBeenCalledWith("quizResults.q2title")
        expect(translate).toHaveBeenCalledWith("quizResults.q1body1")
        expect(translate).toHaveBeenCalledWith("quizResults.q2body1")
        expect(translate).toHaveBeenCalledWith("quizResults.q1body2")
        expect(translate).toHaveBeenCalledWith("quizResults.q2body2")
        expect(translate).toHaveBeenCalledWith("quizResults.whyHappens")
        expect(translate).toHaveBeenCalledWith("quizResults.isProblem")
    });

    it("do nothing if quiz responses are invalid", () => {
        let navigation = {
            getParam: (param, value) => {
                return {
                    1: -1,
                    2: 2,
                };
            }
        };
        renderer.create(<QuizResults navigation={navigation} />);
        expect(translate).not.toHaveBeenCalled();
    });
});
