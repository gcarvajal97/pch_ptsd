import React from 'react';
import InjuryPreventionTipsScreen from '../InjuryPainCareScreens/InjuryPreventionTipsScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<InjuryPreventionTipsScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 