import i18n from 'i18n-js';
import { configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import ReactionsToInjury from '../ReactionsToInjury';

import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

describe("ReactionsToInjury", () =>{
    beforeEach(() => {
        i18n.locale = 'en';
    })

    it('renders correctly', () => {
        const tree = renderer.create(<ReactionsToInjury />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('renders correctly in Spanish', () => {
        i18n.locale = 'es';
        const tree = renderer.create(<ReactionsToInjury />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

