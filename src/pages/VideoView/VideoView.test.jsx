import React from 'react';
import renderer from 'react-test-renderer';
import VideoView from './index';

describe('VideoView Tests', () => {
  test('VideoView renders correctly', () => {
    const tree = renderer.create(<VideoView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
