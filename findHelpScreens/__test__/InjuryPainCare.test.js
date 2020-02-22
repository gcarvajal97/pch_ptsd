import React from 'react';
import InjuryPainCare from '../InjuryPainCareScreens/InjuryPainCare';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    expect(renderer.create(<InjuryPainCare/>).toJSON()).toMatchSnapshot();
}) 