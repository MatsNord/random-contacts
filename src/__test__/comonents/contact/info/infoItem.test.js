import React from 'react';
import renderer from 'react-test-renderer';
import InfoItem from './../../../../components/contact/info/infoItem';

test('InfoItem render', () => {

  const tree = renderer.create(<InfoItem />).toJSON();
  expect(tree).toMatchSnapshot();
});