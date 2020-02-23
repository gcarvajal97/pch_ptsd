import React from 'react';
import SelfCareCard from '../selfCareScreens/SelfCareCard';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<SelfCareCard/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 