import React from 'react';
import WhenToLook from '../outsideHelpScreens/WhenToLook';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<WhenToLook/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 