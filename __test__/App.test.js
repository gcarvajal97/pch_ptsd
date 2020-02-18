import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../components/MainNavigator');
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe("App", () => {
    
    afterEach(() => {
        jest.clearAllMocks();
      });

    it("matches Snapshot", () => {
        const snap = renderer.create(<App />).toJSON();
        expect(snap).toMatchSnapshot();
    });
});