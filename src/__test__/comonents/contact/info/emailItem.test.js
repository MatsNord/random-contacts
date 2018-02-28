import React from 'react';
import renderer from 'react-test-renderer';
import EmailItem from './../../../../components/contact/info/emailItem';

test('Email render', () => {

  const tree = renderer.create(<EmailItem />).toJSON();
  expect(tree).toMatchSnapshot();
});