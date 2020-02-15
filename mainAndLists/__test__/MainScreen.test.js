import React from 'react';
import MainScreen from '../MainScreen';
import renderer from 'react-test-renderer';
import Button from 'react-native';
import NavigationService from '../../components/NavigationService';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
jest.mock('../../components/NavigationService');

describe("MainScreen", () => {
    it("matches Snapshot", () => {
        const snap = renderer.create(<MainScreen />).toJSON;
        expect(snap).toMatchSnapshot();
    });

    it('opens drawer', () => {
        const wrapper = shallow(<MainScreen />);
        wrapper.findWhere((Button) => Button.prop('testID') === 'my-button').onPress()
        //wrapper.find(Button).last().props().onPress();
        expect(NavigationService.openDrawer).toHaveBeenCalled();
    });
});