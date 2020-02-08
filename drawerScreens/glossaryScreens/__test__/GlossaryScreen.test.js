import React from 'react';
import GlossaryScreen from '../GlossaryScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<GlossaryScreen />).toJSON();
    expect(tree).toMatchSnapshot();
})