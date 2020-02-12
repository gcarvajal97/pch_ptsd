import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import NavigationService from "../../components/NavigationService";
import QuizResults from "../QuizResults";

jest.mock("../../components/NavigationService.js");
let navigation = {
  getParam: (param, value) => {
    return value
  },

}

describe("QuizResults", () => {
    it("renders correctly", () => {
        expect(renderer.create(<QuizResults navigation={navigation}/>).toJSON()).toMatchSnapshot();
    });
});
