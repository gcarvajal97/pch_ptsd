import React from 'react';
import GlossaryScreenCard from '../GlossaryScreenCard';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<GlossaryScreenCard />).toJSON();
    expect(tree).toMatchSnapshot();
})