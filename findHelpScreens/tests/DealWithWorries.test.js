import React from 'react';
import DealWithWorries from '../DealWithWorries';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<DealWithWorries/>).toJSON();
    expect(tree).toMatchSnapshot();
}) 