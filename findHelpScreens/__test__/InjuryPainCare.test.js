import React from 'react';
import InjuryPainCare from '../InjuryPainCareScreens/InjuryPainCare';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<InjuryPainCare/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 