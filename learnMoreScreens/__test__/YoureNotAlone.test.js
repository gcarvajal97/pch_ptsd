import React from 'react';
import YoureNotAlone from '../YoureNotAlone';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<YoureNotAlone />).toJSON();
    expect(tree).toMatchSnapshot();
})