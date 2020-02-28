import React from 'react';
import Resources from '../Resources';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import i18n from "i18n-js";

configure({ adapter: new Adapter() });

describe("Resources", () => {

    beforeEach(() => {
        i18n.local = "en";
    });

    it('renders one resource', () => {
        const content = [  
            {
                link: {
                    text: "Resource Title",
                    url: "http://www.website.org",
                    accessibilityHint: "An accessiblity hint",
                    accessibilityLabel: "An accessibility label"
                },
                "contentText": "Resource description"
            }
        ];
        const result = Resources(content);
        expect(result).toMatchSnapshot();
    });

    it('renders two resources', () => {
        const content = [  
            {
                link: {
                    text: "Resource Title 1",
                    url: "http://www.website1.org",
                    accessibilityHint: "An Accessiblity Hint 1",
                    accessibilityLabel: "An Accessibility Label 1"
                },
                "contentText": "Resource Description 1"
            },
            {
                link: {
                    text: "Resource Title 2",
                    url: "http://www.website2.org",
                    accessibilityHint: "An accessiblity hint 2",
                    accessibilityLabel: "An accessibility label 2"
                },
                "contentText": "Resource Description 2"
            }
        ];
        const result = Resources(content);
        expect(result).toMatchSnapshot();
    });

    it('renders error message if resources are missing', () => {
        const content = [];
        const result = Resources(content);
        expect(result).toMatchSnapshot();
    });

    it('renders error message if resources are not defined', () => {
        const result = Resources(undefined);
        expect(result).toMatchSnapshot();
    });
});