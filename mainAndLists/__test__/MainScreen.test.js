import React from 'react';
import MainScreen from '../MainScreen';
import NavigationService from '../../components/NavigationService';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../components/NavigationService');

describe("MainScreen", () => {
    it("matches Snapshot", () => {
        const snap = renderer.create(<MainScreen />).toJSON;
        expect(snap).toMatchSnapshot();
    });

    it('openDrawer() is called when header button is pressed', () => {
        const navProps = { navigate: () => {} };
        const navigationOptions = MainScreen.navigationOptions(navProps);
        navigationOptions.headerLeft.props.children.props.onPress();
        expect(NavigationService.openDrawer).toHaveBeenCalled();
    });
});