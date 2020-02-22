import React from 'react';
import GlossaryTerms from '../GlossaryTerms';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<GlossaryTerms />).toJSON();
    expect(tree).toMatchSnapshot();
})