import React from 'react';
import InTheED from '../HealthcareTeamScreens/InTheED';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<InTheED/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 