import React from 'react';
import Resources from '../Resources';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Resources />).toJSON();
    expect(tree).toMatchSnapshot();
})