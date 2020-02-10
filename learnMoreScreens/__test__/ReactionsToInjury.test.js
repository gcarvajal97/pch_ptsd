import React from 'react';
import ReactionsToInjury from '../ReactionsToInjury';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ReactionsToInjury />).toJSON();
    expect(tree).toMatchSnapshot();
})