import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import InjuryPreventionTipsScreen from '../InjuryPainCareScreens/InjuryPreventionTipsScreen';
import renderer from 'react-test-renderer';
import {Linking} from 'expo';

configure({ adapter: new Adapter() });
jest.mock('expo', () => ({
    Linking: {
        openURL: jest.fn()
    }
}));


describe("InjuryPreventionTipsScreen", () => {
    afterEach(() => {
        jest.clearAllMocks();
      });

    it("renders correctly", () => {
        expect(renderer.create(<InjuryPreventionTipsScreen/>).toJSON()).toMatchSnapshot();
    });

    it("clicks external link, opens correct website", () => {
        const wrapper = shallow(<InjuryPreventionTipsScreen/>);
        wrapper.findWhere((node) => node.prop('testID') === 'hyperlink').props().onPress();
        expect(Linking.openURL).toHaveBeenCalledWith('https://www.chop.edu/centers-programs/injury-prevention-program');
    })
})