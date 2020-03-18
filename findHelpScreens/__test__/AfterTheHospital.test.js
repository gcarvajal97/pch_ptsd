import React from 'react';
import AfterTheHospital from '../HealthcareTeamScreens/AfterTheHospital';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<AfterTheHospital/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 