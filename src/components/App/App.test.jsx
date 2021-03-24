import React from 'react';
import renderer from 'react-test-renderer';
import App from './index';

describe('App Tests', () => {
  test('App renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
