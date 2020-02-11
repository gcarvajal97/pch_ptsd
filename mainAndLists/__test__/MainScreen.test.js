import React from 'react';
import MainScreen from '../MainScreen';
import renderer from 'react-test-renderer';

describe("MainScreen", () => {
    it("matches Snapshot", () => {
        const snap = renderer.create(<MainScreen />).toJSON;
        expect(snap).toMatchSnapshot;
    });
});