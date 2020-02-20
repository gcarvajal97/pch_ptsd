import React from 'react';
import ManagingPainScreen from '../InjuryPainCareScreens/ManagingPainScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ManagingPainScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 