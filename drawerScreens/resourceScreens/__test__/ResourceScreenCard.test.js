import React from 'react';
import ResourceScreenCard from '../ResourceScreenCard';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ResourceScreenCard />).toJSON();
    expect(tree).toMatchSnapshot();
})