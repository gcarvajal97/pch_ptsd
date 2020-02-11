
import React from "react";
import renderer from "react-test-renderer";
import QuizMain from "../QuizMain";

describe("QuizMain", () => {
    it("renders correctly", () => {
        expect(renderer.create(<QuizMain />).toJSON()).toMatchSnapshot();
    });

});
