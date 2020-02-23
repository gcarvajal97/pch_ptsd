import React from 'react';
import TakingCareofCastScreen from '../InjuryPainCareScreens/TakingCareofCastScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<TakingCareofCastScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 