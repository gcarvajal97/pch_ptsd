import React from 'react';
import LearnMoreList from '../LearnMoreList'
import renderer from 'react-test-renderer';

describe("LearnMoreList", () => {
    it("matches Snapshot", () => {
        const snap = renderer.create(<LearnMoreList />).toJSON;
        expect(snap).toMatchSnapshot();
    });
});