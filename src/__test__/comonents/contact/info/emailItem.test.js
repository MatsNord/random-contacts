import React from 'react';
import renderer from 'react-test-renderer';
import EmailItem from './../../../../components/contact/info/emailItem';

test('Email render', () => {

  const tree = renderer.create(<EmailItem email="email@email.email" infoText="infoText" />).toJSON();
  expect(tree).toMatchSnapshot();
});