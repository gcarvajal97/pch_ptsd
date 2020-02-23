import React from 'react';
import UsingCrutchesScreen from '../InjuryPainCareScreens/UsingCrutchesScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<UsingCrutchesScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 