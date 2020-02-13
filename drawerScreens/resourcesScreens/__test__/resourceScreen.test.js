import React from 'react';
import resourceScreen from '../resourceScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<resourceScreen />).toJSON();
    expect(tree).toMatchSnapshot();
})