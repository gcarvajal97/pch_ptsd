import React from 'react';
import FindHelpCard from '../FindHelpCard';
import NavigationService from '../../components/NavigationService';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../components/NavigationService')

describe("FindHelpCard", () => {

    afterEach(() => {
        jest.clearAllMocks();
      });

    it("matches Snapshot", () => {
        const snap = renderer.create(<FindHelpCard />).toJSON();
        expect(snap).toMatchSnapshot();
    });

    it("navigates to 'FindHelp' page on button press", () => {
        const wrapper = shallow(<FindHelpCard />);
        wrapper.findWhere((node) => node.prop('testID') === 'FindHelpButton').props().onPress();
        expect(NavigationService.navigate).toHaveBeenCalledWith('FindHelp');
    });
});