import React from 'react';
import LearnMoreList from '../LearnMoreList'
import renderer from 'react-test-renderer';
import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationService from '../../components/NavigationService';
import { ListItem } from 'react-native-elements';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../components/NavigationService')

describe("LearnMoreList", () => {

    afterEach(() => {
        jest.clearAllMocks();
      });

    it("matches Snapshot", () => {
        const snap = renderer.create(<LearnMoreList />).toJSON();
        expect(snap).toMatchSnapshot();
    });

    it("navigates to NotAlone page on button press", () => {
        const wrapper = shallow(<LearnMoreList />);
        wrapper.find(ListItem).at(0).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('NotAlone');
    });

    it("navigates to Reactions page on button press", () => {
        const wrapper = shallow(<LearnMoreList />);
        wrapper.find(ListItem).at(1).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('Reactions');
    });

    it("navigates to TraumaticStressReactions page on button press", () => {
        const wrapper = shallow(<LearnMoreList />);
        wrapper.find(ListItem).at(2).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('TraumaticStressReactions');
    });

    it("navigates to HowLong page on button press", () => {
        const wrapper = shallow(<LearnMoreList />);
        wrapper.find(ListItem).at(3).props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('HowLong');
    });
});