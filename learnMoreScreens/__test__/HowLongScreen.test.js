import React from 'react';
import HowLongScreen from '../HowLongScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<HowLongScreen />).toJSON();
    expect(tree).toMatchSnapshot();
})