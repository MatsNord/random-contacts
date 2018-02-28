import React from 'react';
import renderer from 'react-test-renderer';
import Name from './../../../../components/contact/name/name';

test('NameItem render', () => {

  const tree = renderer.create(<Name />).toJSON();
  expect(tree).toMatchSnapshot();
});