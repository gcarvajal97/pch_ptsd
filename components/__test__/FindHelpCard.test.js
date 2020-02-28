import React from 'react';
import FindHelpCard from '../FindHelpCard';
import renderer from 'react-test-renderer';

describe("FindHelpCard", () => {

    it("matches Snapshot", () => {
        const snap = renderer.create(<FindHelpCard />).toJSON();
        expect(snap).toMatchSnapshot();
    });
});