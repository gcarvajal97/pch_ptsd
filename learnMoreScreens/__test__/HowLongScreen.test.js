import i18n from 'i18n-js';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import HowLongScreen from '../HowLongScreen';
import renderer from 'react-test-renderer';
import {Linking} from 'expo';

configure({ adapter: new Adapter() });
jest.mock('expo', () => ({
    Linking: {
        openURL: jest.fn()
    }
}));


describe("HowLongScreen", () => {
    beforeEach(() => {
        i18n.locale = 'en';
    })

    afterEach(() => {
        jest.clearAllMocks();
      });

    it("renders correctly", () => {
        expect(renderer.create(<HowLongScreen />).toJSON()).toMatchSnapshot();
    });

    it("renders correctly in Spanish", () => {
        i18n.locale = 'es';
        expect(renderer.create(<HowLongScreen />).toJSON()).toMatchSnapshot();
    });

    it("clicks external link, opens correct website", () => {
        const wrapper = shallow(<HowLongScreen />);
        wrapper.findWhere((node) => node.prop('testID') === 'hyperlink').props().onPress();
        expect(Linking.openURL).toHaveBeenCalledWith('https://medlineplus.gov/ency/article/000925.htm');
    })
})