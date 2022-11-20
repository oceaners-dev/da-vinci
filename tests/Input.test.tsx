import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<div />).toJSON();
  expect(tree).toMatchSnapshot();
});
