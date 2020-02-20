import React from 'react';
import AdbominalTraumaScreen from '../InjuryPainCareScreens/AdbominalTraumaScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<AdbominalTraumaScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 