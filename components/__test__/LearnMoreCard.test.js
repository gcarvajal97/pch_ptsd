import React from 'react';
import LearnMoreCard from '../LearnMoreCard';
import NavigationService from '../../components/NavigationService';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../components/NavigationService')

describe("LearnMoreCard", () => {

    afterEach(() => {
        jest.clearAllMocks();
      });

    it("matches Snapshot", () => {
        const snap = renderer.create(<LearnMoreCard />).toJSON();
        expect(snap).toMatchSnapshot();
    });

    it("navigates to 'LearnMore' page on button press", () => {
        const wrapper = shallow(<LearnMoreCard />);
        wrapper.findWhere((node) => node.prop('testID') === 'LearnMoreButton').props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('LearnMore');
    });
});