import React from 'react';
import resourceScreen from '../resourceScreen';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import i18n from "i18n-js";

configure({ adapter: new Adapter() });

describe("resourceScreen", () => {
    
    let wrapper;

    beforeEach(() => {
        i18n.local = "en";
    });

    it('renders correctly', () => {
        const tree = renderer.create(<resourceScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in Spanish', () => {
        i18n.locale = 'es'
        const tree = renderer.create(<resourceScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});