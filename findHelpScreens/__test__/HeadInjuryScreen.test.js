import React from 'react';
import HeadInjuryScreen from '../InjuryPainCareScreens/HeadInjuryScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<HeadInjuryScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 