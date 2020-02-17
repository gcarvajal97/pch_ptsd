import React from 'react';
import HealthcareTeam from '../HealthcareTeamScreens/HealthcareTeam';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<HealthcareTeam/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 