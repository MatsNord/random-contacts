import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();
import Card from './../../../../components/contact/card/card';

test('Card render', () => {
  const person = {name: {first: 'f', second: 's'}, picture: {imgSize: 'medium'}};

  renderer.render(<Card person={person} />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});