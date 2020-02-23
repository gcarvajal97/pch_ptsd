import React from 'react';
import Avoidance from '../selfCareScreens/Avoidance';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Avoidance/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 