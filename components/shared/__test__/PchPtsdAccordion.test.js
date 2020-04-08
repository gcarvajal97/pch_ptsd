import React from "react";
import renderer from "react-test-renderer";
import PchPtsdAccordion from "../PchPtsdAccordion";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

configure({ adapter: new Adapter() });

describe("PchPtsdAccordion", () => {
    it("renders single section correctly", () => {
        const section = [
            {
                name: "section name",
                content: [
                    {
                        name: "content name",
                        content: "some content"
                    }
                ]
            }
        ];
        const renderFn = props => {
            `${props.name}${props.content}`;
        };
        expect(
            renderer
                .create(
                    <PchPtsdAccordion
                        sections={section}
                        contentRenderFunction={renderFn}
                    />
                )
                .toJSON()
        ).toMatchSnapshot();
    });

    it("renders multiple sections correctly", () => {
        const sections = [
            {
                name: "section name",
                content: [
                    {
                        name: "content name",
                        content: "some content"
                    }
                ]
            },
            {
                name: "another section name",
                content: [
                    {
                        name: "another content name",
                        content: "another some content"
                    }
                ]
            }
        ];
        const renderFn = props => {
            `${props.name}${props.content}`;
        };
        expect(
            renderer
                .create(
                    <PchPtsdAccordion
                        sections={sections}
                        contentRenderFunction={renderFn}
                    />
                )
                .toJSON()
        ).toMatchSnapshot();
    });

    it("should render an active section properly", () => {
        const section = [
            {
                name: "section name",
                content: [
                    {
                        name: "content name",
                        content: "some content"
                    }
                ]
            }
        ];
        const renderFn = props => {
            `${props.name}${props.content}`;
        };
        const fixture = new PchPtsdAccordion({
            sections: section,
            contentRenderFunction: renderFn
        });
        expect(
            renderer.create(fixture._renderHeader(section, null, true))
        ).toMatchSnapshot();
    });

    it("should update active sections in state", () => {
        const section = [
            {
                name: "section name",
                content: [
                    {
                        name: "content name",
                        content: "some content",
                        accessibilityHint: "a hint"
                    }
                ]
            }
        ];
        const renderFn = props => {
            "this doesn't matter";
        };
        const instance = shallow(
            <PchPtsdAccordion
                sections={section}
                contentRenderFunction={renderFn}
            />
        ).instance();
        instance._updateSections([1]);
        expect(instance.state.activeSections).toEqual([1]);
    });
});
