import React from "react";
import renderer from "react-test-renderer";
import PchPtsdAccordion from "../PchPtsdAccordion";

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
});
