import React from 'react';
import renderer from 'react-test-renderer';
import Phone from './../../../../components/contact/phone/phone';

test('PhoneItem render', () => {

  const tree = renderer.create(<Phone />).toJSON();
  expect(tree).toMatchSnapshot();
});