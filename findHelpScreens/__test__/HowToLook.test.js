import React from 'react';
import HowToLook from '../outsideHelpScreens/HowToLook';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<HowToLook/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 