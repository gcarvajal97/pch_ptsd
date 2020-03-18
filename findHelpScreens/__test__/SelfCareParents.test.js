import React from 'react';
import SelfCareParents from '../selfCareScreens/SelfCareParents';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<SelfCareParents/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 