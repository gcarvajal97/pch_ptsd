import React from 'react';
import TraumaticStressReactions from '../TraumaticStressReactions';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<TraumaticStressReactions />).toJSON();
    expect(tree).toMatchSnapshot();
})