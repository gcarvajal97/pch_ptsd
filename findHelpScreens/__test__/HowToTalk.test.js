import i18n from "i18n-js";
import React from "react";
import renderer from "react-test-renderer";
import HowToTalk from '../HowToTalk';


describe("HowToTalk", () => {
  let wrapper;
    beforeEach(() => {
        i18n.locale = "en";
    });

    test("renders correctly", () => {
        const tree = renderer.create(<HowToTalk/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});