import React from 'react';
import SelfCare from '../selfCareScreens/SelfCare';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<SelfCare/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 