import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import HowToLook from '../outsideHelpScreens/HowToLook';
import renderer from 'react-test-renderer';
import {Linking} from 'expo';

configure({ adapter: new Adapter() });
jest.mock('expo', () => ({
    Linking: {
        openURL: jest.fn()
    }
}));


describe("HowToLook", () => {
    afterEach(() => {
        jest.clearAllMocks();
      });

    it("renders correctly", () => {
        expect(renderer.create(<HowToLook/>).toJSON()).toMatchSnapshot();
    });

    it("clicks external link, opens correct website", () => {
        const wrapper = shallow(<HowToLook/>);
        wrapper.findWhere((node) => node.prop('testID') === 'hyperlink').props().onPress();
        expect(Linking.openURL).toHaveBeenCalledWith('http://www.nctsnet.org/nccts/nav.do?pid=ctr_aud_prnt_gethelp');
    })
})