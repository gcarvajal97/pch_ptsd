import React from 'react';
import InTheHospital from '../HealthcareTeamScreens/InTheHospital';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<InTheHospital/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 