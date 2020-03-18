import React from 'react';
import RelivingWhat from '../selfCareScreens/RelivingWhat';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<RelivingWhat/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 