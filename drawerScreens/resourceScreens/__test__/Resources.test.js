import React from 'react';
import Resources from '../Resources';
import renderer from 'react-test-renderer';
//import { Text } from "react-native-elements";
import { Linking } from "expo";
import { StyleSheet, Text, View } from "react-native";
import Enzyme, { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import en from '../../../languages/en.json';
import es from '../../../languages/es.json';

configure({ adapter: new Adapter() });
jest.mock('expo', () => ({
    Linking: {
        openURL: jest.fn()
    }
}));

describe("Resources", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("clicks external link, opens correct website", () => {
        const translation = JSON.stringify(en.resources.accordion);
        const content = [translation];
        const result = Resources(content);      
        const wrapper = shallow(result);    
        wrapper.find('Text').first().props().onPress();
    })

    it('renders properly in english', () => {
        const translation = JSON.stringify(en.resources.accordion);
        const content = [translation];
        const result = Resources(content);
        expect(result).toMatchSnapshot();
    });

    it('renders properly in spanish', () => {
        const translation = JSON.stringify(es.resources.accordion);
        const content = [translation];
        const result = Resources(content);
        expect(result).toMatchSnapshot();
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

const styles = StyleSheet.create({
    link: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2089DC",
        textDecorationLine: "underline",
        marginVertical: 2
    }
});