import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Accordion from "react-native-collapsible/Accordion";
import renderer from "react-test-renderer";
import translate from "../../components/translateService";
import SelfCare from '../selfCareScreens/SelfCare'

configure({ adapter: new Adapter() });

describe("SelfCare", () => {
    let wrapper;
    const section = {
        title: translate("selfCare.content.reExperiencing.title"),
        content: "content",
        value: 0,
        accessibilityHint: "a hint"
    };

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<SelfCare />);
    });

    it("renders correctly", () => {
        const tree = renderer.create(<SelfCare />).toJSON();
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
