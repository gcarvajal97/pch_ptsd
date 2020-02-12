import React from 'react';
import HowToTalk from '../HowToTalk';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<HowToTalk/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 