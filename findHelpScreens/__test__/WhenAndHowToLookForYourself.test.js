import React from 'react';
import WhenAndHowToLookForYourself from '../outsideHelpScreens/WhenAndHowToLookForYourself';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<WhenAndHowToLookForYourself/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 