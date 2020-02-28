import React from 'react';
import LearnMoreCard from '../LearnMoreCard';
import renderer from 'react-test-renderer';

describe("LearnMoreCard", () => {

    it("matches Snapshot", () => {
        const snap = renderer.create(<LearnMoreCard />).toJSON();
        expect(snap).toMatchSnapshot();
    });
});