import React from 'react';
import WhenToGetOutsideHelp from '../outsideHelpScreens/WhenToGetOutsideHelp';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<WhenToGetOutsideHelp/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 