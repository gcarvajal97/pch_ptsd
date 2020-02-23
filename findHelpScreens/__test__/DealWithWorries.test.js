import i18n from "i18n-js";
import React from "react";
import renderer from "react-test-renderer";
import DealWithWorries from "../DealWithWorries";


describe("DealWithWorries", () => {
  let wrapper;
    beforeEach(() => {
        i18n.locale = "en";
    });

    test("renders correctly", () => {
        const tree = renderer.create(<DealWithWorries />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
