import React from 'react';
import { ListItem } from 'react-native-elements';
import FindHelpList from '../FindHelpList';
import NavigationService from '../../components/NavigationService';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../components/NavigationService');

describe("FindHelpList", () => {

    afterEach(() => {
        jest.clearAllMocks();
      });

    it("matches Snapshot", () => {
        const snap = renderer.create(<FindHelpList />).toJSON;
        expect(snap).toMatchSnapshot();
    });

    it("navigates to quickTips when button is pressed", () => {
        const wrapper = shallow(<FindHelpList />)
        wrapper.find(ListItem).at(0).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('QuickTips')
    });

    it("navigates to HowToTalk when button is pressed", () => {
        const wrapper = shallow(<FindHelpList />)
        wrapper.find(ListItem).at(1).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('HowToTalk')
    });

    it("navigates to DealWorries when button is pressed", () => {
        const wrapper = shallow(<FindHelpList />)
        wrapper.find(ListItem).at(2).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('DealWorries')
    });

    it("navigates to HealthTeam when button is pressed", () => {
        const wrapper = shallow(<FindHelpList />)
        wrapper.find(ListItem).at(3).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('HealthTeam')
    });

    it("navigates to InjuryPainCare when button is pressed", () => {
        const wrapper = shallow(<FindHelpList />)
        wrapper.find(ListItem).at(4).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('InjuryPainCare')
    });

    it("navigates to WhenToGetHelp when button is pressed", () => {
        const wrapper = shallow(<FindHelpList />)
        wrapper.find(ListItem).at(5).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('WhenToGetHelp')
    });

    it("navigates to SelfCare when button is pressed", () => {
        const wrapper = shallow(<FindHelpList />)
        wrapper.find(ListItem).at(6).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('SelfCare')
    });
});