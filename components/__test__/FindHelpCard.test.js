import React from 'react';
import FindHelpCard from '../FindHelpCard';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("FindHelpCard", () => {
    
    afterEach(() => {
        jest.clearAllMocks();
      });

    it("matches Snapshot", () => {
        const snap = renderer.create(<FindHelpCard />).toJSON();
        expect(snap).toMatchSnapshot();
    });
});