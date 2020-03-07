import i18n from 'i18n-js';
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import YoureNotAlone from '../YoureNotAlone';
import { Video } from 'expo-av';

import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe("YoureNotAlone", () => {
    let wrapper;
    beforeEach(() => {
        i18n.locale = "en";
    });

    it('renders correctly', () => {
            const tree = renderer.create(<YoureNotAlone />).toJSON();
            expect(tree).toMatchSnapshot();}
        )

     it('renders correctly in Spanish', () => {
            i18n.locale = 'es'
            const tree = renderer.create(<YoureNotAlone />).toJSON();
            expect(tree).toMatchSnapshot();}
        )
})