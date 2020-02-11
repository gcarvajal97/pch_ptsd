import React from 'react';
import FindHelpList from '../FindHelpList'
import renderer from 'react-test-renderer';

describe("FindHelpList", () => {
    it("matches Snapshot", () => {
        const snap = renderer.create(<FindHelpList />).toJSON;
        expect(snap).toMatchSnapshot;
    });
});