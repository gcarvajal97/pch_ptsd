import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import HowLongScreen from '../HowLongScreen';

import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe("HowLongScreen", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HowLongScreen />);
    })

    it("renders correctly", () => {
        expect(renderer.create(<HowLongScreen />).toJSON()).toMatchSnapshot();
    });

    it("clicks external link, but throw error in jest", () => {
        const linking = jest.fn();
        expect(linking).toHaveBeenCalledWith(
            wrapper
            .find('#howLongScreen.hyperlink')
            .simulate('press'));
    })
})