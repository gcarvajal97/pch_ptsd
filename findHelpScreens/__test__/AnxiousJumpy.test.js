import React from 'react';
import AnxiousJumpy from '../selfCareScreens/AnxiousJumpy';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<AnxiousJumpy/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 