import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Accordion from "react-native-collapsible/Accordion";
import renderer from "react-test-renderer";
import translate from "../../components/translateService";
import WhenToGetOutsideHelp from '../outsideHelpScreens/WhenToGetOutsideHelp'

configure({ adapter: new Adapter() });

describe("WhenToGetOutsideHelp", () => {
    let wrapper;
    const section = {
        name: translate("whenToGetOutsideHelp.page1"),
        content: "content",
        value: 0,
        accessibilityHint: "a hint"
    };

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<WhenToGetOutsideHelp />);
    });

    it("renders correctly", () => {
        const tree = renderer.create(<WhenToGetOutsideHelp />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should not have active sections", () => {
        wrapper
            .find(Accordion)
            .props()
            .onChange(undefined);
        expect(wrapper.state().activeSections).toEqual([]);
    });

    it("should have an active section", () => {
        wrapper
            .find(Accordion)
            .props()
            .onChange([0]);
        expect(wrapper.state().activeSections).toEqual([0]);
    });

    it("should render active accordion content", () => {
        const result = wrapper.instance().renderContent(section, null, true);
        expect(result).toMatchSnapshot();
    });

    it("should render inactive accordion content", () => {
        const result = wrapper.instance().renderContent(section, null, false);
        expect(result).toMatchSnapshot();
    });

    it("should render an active accordion header", () => {
        wrapper.setState({
            activeSections: [0]
        });
        const result = wrapper.instance().renderHeader(section, null, true);
        expect(result).toMatchSnapshot();
    });

    it("should render an inactive accordion header", () => {
        const result = wrapper.instance().renderHeader(section, null, false);
        expect(result).toMatchSnapshot();
    });
});
