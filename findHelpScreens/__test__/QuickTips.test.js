import React from 'react';
import QuickTips from '../QuickTipsScreens/QuickTips';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<QuickTips/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 